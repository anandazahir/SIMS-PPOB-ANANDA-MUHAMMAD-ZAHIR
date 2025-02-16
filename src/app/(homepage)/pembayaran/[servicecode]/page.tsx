"use client";

import React from "react";
import { useTransaction } from "@/lib/hooks/useTransaction";
import { ProfileSection } from "@/components/Homepage/profilesection";
import { Container } from "@/components/ui/container";
import { TransactionForm } from "@/components/Homepage/pembayaran/TransactionForm";
import { useProfile } from "@/lib/hooks/useProfile";
import { useParams } from "next/navigation";
import { ServiceInfo } from "@/components/Homepage/pembayaran/ServiceInfo";
import { LoadingPage } from "@/components/Homepage/LoadingPage";
import { DialogAlert } from "@/components/ui/AlertDialog";
function PembayaranPage() {
  const params = useParams<{ servicecode: string }>();

  const {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    isLoading,
    selectedService,
    isLoadingServices,
    saldo,
    dialog,
    setDialog,
  } = useTransaction(params.servicecode);

  const { profile, isLoading: isLoadingProfile } = useProfile();

  if (isLoadingServices) return <LoadingPage />;
  if (!selectedService) return <p>Service not found</p>;

  return (
    <Container>
      <ProfileSection
        profile={profile?.data}
        isLoading={isLoadingProfile}
        saldo={saldo?.data.balance}
      />
      <ServiceInfo service={selectedService} />
      <TransactionForm
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        onSubmit={onSubmit}
        isLoading={isLoading}
        service={selectedService}
      />
      <DialogAlert dialog={dialog} setDialog={setDialog} />
    </Container>
  );
}

export default PembayaranPage;
