import React from "react";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils/utils";
import { UseFormSetValue } from "react-hook-form";
import { TopUpRequest } from "@/lib/utils/scheme";

const quickAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

interface QuickAmountsProps {
  setValue: UseFormSetValue<TopUpRequest>;
  isLoading: boolean;
}

export function QuickAmounts({ setValue, isLoading }: QuickAmountsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {quickAmounts.map((value) => (
        <Button
          key={value}
          type="button"
          variant="outline"
          onClick={() => setValue("top_up_amount", value)}
          className="h-12"
          disabled={isLoading}
        >
          Rp{formatRupiah(value)}
        </Button>
      ))}
    </div>
  );
}
