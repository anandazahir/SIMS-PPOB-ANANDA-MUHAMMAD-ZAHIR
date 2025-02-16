import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { formatRupiah } from "@/lib/utils/utils";

interface ProfileSectionProps {
  profile: {
    first_name: string;
    last_name: string;
    profile_image: string;
  } | null;
  isLoading: boolean;
  saldo: any;
}

export function ProfileSection({
  profile,
  isLoading,
  saldo,
}: ProfileSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Profile Section */}
      <section className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profile?.profile_image || "/images/default-avatar.png"}
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Selamat datang,</p>
              <h1 className="text-2xl font-semibold">{`${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`}</h1>
            </div>
          </>
        )}
      </section>

      {/* Balance Card */}
      <section className="w-full">
        <div className="bg-primary text-primary-foreground rounded-lg p-6">
          <div className="flex-col items-center  space-y-3">
            <p>Saldo anda</p>
            <h2 className="text-3xl font-semibold ">
              {isVisible ? `Rp ${formatRupiah(saldo)}` : "Rp •••••••"}
            </h2>

            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:text-primary"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? "Sembunyikan" : "Lihat Saldo"}
              {isVisible ? (
                <EyeOff className="w-4 h-4 mr-2" />
              ) : (
                <Eye className="w-4 h-4 mr-2" />
              )}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
