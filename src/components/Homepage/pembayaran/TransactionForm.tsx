import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";
import { TransactionRequest } from "@/lib/utils/scheme";
import { Wallet } from "lucide-react";

interface TransactionFormProps {
  register: UseFormRegister<TransactionRequest>;
  handleSubmit: UseFormHandleSubmit<TransactionRequest>;
  setValue: UseFormSetValue<TransactionRequest>;
  onSubmit: (data: TransactionRequest) => void;
  isLoading: boolean;
  service: any;
}

export function TransactionForm({
  register,
  handleSubmit,
  setValue,
  onSubmit,
  isLoading,
  service,
}: TransactionFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="hidden" {...register("service_code")} />
      <Input
        type="text"
        value={service.service_tariff}
        className="h-12 text-lg"
        leftIcon={<Wallet className="h-5 w-5 text-gray-400" />}
        readOnly
      />
      <Button type="submit" variant="submit" isLoading={isLoading}>
        Bayar
      </Button>
    </form>
  );
}
