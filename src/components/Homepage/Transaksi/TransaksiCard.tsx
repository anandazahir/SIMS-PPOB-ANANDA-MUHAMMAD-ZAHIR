"use client";

import { formatRupiah, formatDate } from "@/lib/utils/utils";
import { Card, CardContent } from "@/components/ui/card";

interface TransactionCardProps {
  transaction: {
    invoice_number: string;
    transaction_type: string;
    total_amount: number;
    created_on: string;
    description?: string;
  };
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p
            className={`text-lg font-semibold ${
              transaction.transaction_type === "TOPUP"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {transaction.transaction_type === "TOPUP" ? "+ " : "- "}
            Rp{formatRupiah(transaction.total_amount)}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatDate(transaction.created_on)}
          </p>
        </div>
        {transaction.description && (
          <p className="text-sm text-muted-foreground">
            {transaction.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
