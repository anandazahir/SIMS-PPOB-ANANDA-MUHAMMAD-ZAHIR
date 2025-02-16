"use client";

import React from "react";
import { useTopUp } from "@/lib/hooks/useTopUp";
import { ProfileSection } from "@/components/Homepage/profilesection";
import { Container } from "@/components/ui/container";
import { useProfile } from "@/lib/hooks/useProfile";
import { TopUpForm } from "@/components/Homepage/TopUp/TopUpForm";
import { LoadingPage } from "@/components/Homepage/LoadingPage";
import { DialogAlert } from "@/components/ui/AlertDialog";

function TopUppage() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setValue,
    isLoading,
    error,
    saldo,
    dialog,
    setDialog,
  } = useTopUp();
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
      <TopUpForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        setValue={setValue}
        isLoading={isLoading}
        error={error}
      />
      <DialogAlert dialog={dialog} setDialog={setDialog} />
    </Container>
  );
}

export default TopUppage;
