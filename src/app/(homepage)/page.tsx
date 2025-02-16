"use client";

import React from "react";
import { BannerCarousel } from "@/components/Homepage/BannerCarousel";
import { ServiceList } from "@/components/Homepage/ServiceList";
import {
  useGetServicesQuery,
  useGetBannersQuery,
} from "@/lib/api/services/informastionApi";
import { ProfileSection } from "@/components/Homepage/profilesection";
import { useProfile } from "@/lib/hooks/useProfile";
import { Container } from "@/components/ui/container";
import { useGetBalanceQuery } from "@/lib/api/services/transactionApi";
import { LoadingPage } from "@/components/Homepage/LoadingPage";

function Homepage() {
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesQuery();
  const { data: banners, isLoading: isLoadingBanners } = useGetBannersQuery();
  const { profile, isLoading } = useProfile();
  const { data: saldo } = useGetBalanceQuery();
  if (isLoading && isLoadingServices && isLoadingBanners) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <ProfileSection
        profile={profile?.data}
        isLoading={isLoading}
        saldo={saldo?.data.balance}
      />
      <ServiceList services={services?.data} isLoading={isLoadingServices} />
      <BannerCarousel banners={banners?.data} isLoading={isLoadingBanners} />
    </Container>
  );
}

export default Homepage;
