import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTopUpMutation, useGetBalanceQuery, useGetTransactionHistoryQuery } from "@/lib/api/services/transactionApi";
import { TopUpSchema, TopUpRequest } from "@/lib/utils/scheme";
import { useState } from "react";
import { formatRupiah } from "../utils/utils";

export function useTopUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TopUpRequest>({
    resolver: zodResolver(TopUpSchema),
    defaultValues: { top_up_amount: 0 },
  });
  const [dialog, setDialog] = useState<{
    open: boolean;
    message: string;
    success: boolean;
  }>({
    open: false,
    message: "",
    success: false,
  });
  const [topUp, { isLoading, error }] = useTopUpMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
const {data:saldo, refetch:refetchsaldo} = useGetBalanceQuery();
const {refetch:refetchhistory} = useGetTransactionHistoryQuery({limit:5,offset:0});

  const onSubmit = async (formData: TopUpRequest) => {
    setIsSubmitting(true);
    try {
       await topUp(formData).unwrap();

      setDialog({ open: true, message: `Top Up Sebesar ${formatRupiah(formData.top_up_amount)} Berhasil`, success: true });
      setValue("top_up_amount", 0);
      refetchhistory();
      refetchsaldo();
    } catch (err: any) {
      setDialog({
        open: true,
        message: `Gagal Top Up Sebesar ${formatRupiah(formData.top_up_amount)}`,
        success: false,
      });
      alert(err.data?.message || "Terjadi kesalahan");
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
    saldo,
    dialog,
setDialog
  };
}
