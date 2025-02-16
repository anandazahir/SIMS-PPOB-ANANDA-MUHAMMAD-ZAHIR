import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuickAmounts } from "./QuickAmounts";
import { UseFormSetValue } from "react-hook-form";
import { TopUpRequest } from "@/lib/utils/scheme";
import { Wallet } from "lucide-react";

interface TopUpFormProps {
  register: any;
  handleSubmit: (
    callback: (data: any) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: any) => void;
  errors: any;
  setValue: UseFormSetValue<TopUpRequest>;
  isLoading: boolean;
  error?: any;
}

export function TopUpForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
  setValue,
  isLoading,
  error,
}: TopUpFormProps) {
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Silahkan masukan</h2>
        <p className="text-2xl font-bold">Nominal Top Up</p>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-auto gap-4">
        <div>
          <Input
            type="text"
            {...register("top_up_amount", { valueAsNumber: true })}
            placeholder="Masukkan nominal Top Up"
            className="h-12 text-lg "
            disabled={isLoading}
            leftIcon={<Wallet className="h-5 w-5 text-gray-400" />}
          />
          {errors.top_up_amount && (
            <p className="text-red-500 mt-2">{errors.top_up_amount.message}</p>
          )}
          <Button
            type="submit"
            className="w-full h-12 text-base mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Top Up"}
          </Button>
          {error && (
            <p className="text-red-500 mt-2">Terjadi kesalahan saat top-up.</p>
          )}
        </div>

        <QuickAmounts setValue={setValue} isLoading={isLoading} />
      </div>
    </form>
  );
}
