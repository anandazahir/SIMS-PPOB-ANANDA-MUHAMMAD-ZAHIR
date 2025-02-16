"use client";

import React from "react";
import { useTransactionHistory } from "@/lib/hooks/useTransactionHistory";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TransactionCard } from "@/components/Homepage/Transaksi/TransaksiCard";
import { LoadingScreen } from "@/components/Homepage/Transaksi/LoadingScreen";
import { LoadingPage } from "@/components/Homepage/LoadingPage";
import { ProfileSection } from "@/components/Homepage/profilesection";
import { useProfile } from "@/lib/hooks/useProfile";

export default function TransactionPage() {
  const { transactions, isLoading, isFetching, showAll, setShowAll, saldo } =
    useTransactionHistory();
  const { profile, isLoading: isLoadingProfile } = useProfile();

  if (isLoading && isLoadingProfile) {
    return <LoadingPage />;
  }
  return (
    <Container>
      <ProfileSection
        profile={profile?.data}
        isLoading={isLoadingProfile}
        saldo={saldo?.data.balance}
      />
      <h1 className="text-2xl font-semibold mb-6">Semua Transaksi</h1>
      {isFetching && !isLoading && <LoadingScreen />}

      {transactions.map((transaction: any) => (
        <TransactionCard
          key={transaction.invoice_number}
          transaction={transaction}
        />
      ))}

      {transactions.length >= 5 && (
        <div className="w-full flex justify-center">
          <Button
            onClick={() => setShowAll((prev: boolean) => !prev)}
            disabled={isFetching}
            variant="link"
          >
            {showAll ? "Show less" : "Show all"}
          </Button>
        </div>
      )}
    </Container>
  );
}
