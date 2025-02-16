import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateTransactionMutation,
  useGetBalanceQuery,
} from "@/lib/api/services/transactionApi";
import { TransactionSchema, TransactionRequest } from "@/lib/utils/scheme";
import { useGetServicesQuery } from "@/lib/api/services/informastionApi";
import { useGetTransactionHistoryQuery } from "@/lib/api/services/transactionApi";

export function useTransaction(params: string) {
  const [dialog, setDialog] = useState<{
    open: boolean;
    message: string;
    success: boolean;
  }>({
    open: false,
    message: "",
    success: false,
  });
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesQuery();
  const { data: saldo, refetch: refetchsaldo } = useGetBalanceQuery();
  const { refetch: refetchhistory } = useGetTransactionHistoryQuery({
    limit: 5,
    offset: 0,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TransactionRequest>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: { service_code: params },
  });

  const [createTransaction, { isLoading, error }] =
    useCreateTransactionMutation();

  useEffect(() => {
    if (services?.data) {
      const service = services.data.find(
        (item: any) => item.service_code === params
      );
      setSelectedService(service);
      if (service) {
        setValue("service_code", service.service_code);
      }
    }
  }, [services, params, setValue]);

  const onSubmit = async (formData: TransactionRequest) => {
    setIsSubmitting(true);
    try {
      await createTransaction(formData).unwrap();
      setDialog({
        open: true,
        message: `Berhasil Membayar ${selectedService.service_name}`,
        success: true,
      });
      refetchhistory();
      refetchsaldo();
    } catch (error) {
      setDialog({
        open: true,
        message: `Gagal Membayar ${selectedService.service_name}`,
        success: false,
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setValue,
    isLoading: isSubmitting || isLoading,
    error,
    selectedService,
    isLoadingServices,
    saldo,
    dialog,
    setDialog,
  };
}
