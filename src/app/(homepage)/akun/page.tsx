"use client";

import { useRef, useState, RefObject } from "react";
import { useProfile } from "@/lib/hooks/useProfile";
import { ProfileImage } from "@/components/Homepage/akun/ProfileImage";
import { ProfileForm } from "@/components/Homepage/akun/FormProfile";
import { LoadingPage } from "@/components/Homepage/LoadingPage";
import { DialogAlert } from "@/components/ui/AlertDialog";

export default function AkunPage() {
  const {
    profile,
    register,
    handleSubmit,
    handleUploadImage,
    errors,
    onSubmit,
    isLoading,
    isUpdating,
    isUploading,
    previewImage,
    dialog,
    setDialog,
  } = useProfile();

  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(
    null
  ) as RefObject<HTMLInputElement>;

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <section className="container max-w-2xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-4">
        <ProfileImage
          profileImage={profile?.data.profile_image}
          previewImage={previewImage}
          fileInputRef={fileInputRef}
          handleUploadImage={handleUploadImage}
          isEditing={isEditing}
          isUploading={isUploading}
        />
        <h1 className="text-2xl font-semibold">
          {profile?.data.first_name} {profile?.data.last_name}
        </h1>
      </div>

      <ProfileForm
        register={register}
        errors={errors}
        isEditing={isEditing}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isUpdating={isUpdating}
        setIsEditing={setIsEditing}
      />
      <DialogAlert dialog={dialog} setDialog={setDialog} />
    </section>
  );
}
