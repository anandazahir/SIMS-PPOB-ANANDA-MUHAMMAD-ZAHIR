import { useState } from "react";
import {
  useGetTransactionHistoryQuery,
  useGetBalanceQuery,
} from "@/lib/api/services/transactionApi";

const LIMIT = 5;

export function useTransactionHistory() {
  const [showAll, setShowAll] = useState(false);
  const { data: saldo } = useGetBalanceQuery();
  const { data, isLoading, isFetching } = useGetTransactionHistoryQuery({
    limit: showAll ? Number.MAX_SAFE_INTEGER : LIMIT,
    offset: 0,
  });

  return {
    transactions: data?.data?.records || [],
    isLoading,
    isFetching,
    showAll,
    saldo,
    setShowAll,
  };
}
