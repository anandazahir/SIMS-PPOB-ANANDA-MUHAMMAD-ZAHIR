"use client";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { FormRegister } from "@/components/Auth/FormRegister";
import { useRegister } from "@/lib/hooks/useRegister";
import { DialogAlert } from "@/components/ui/AlertDialog";
import { Dialog } from "@radix-ui/react-dialog";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    dialog,
    setDialog,
  } = useRegister();
  return (
    <AuthLayout
      textTitle="Lengkapi data untuk membuat akun"
      textLink="sudah punya akun? login"
      href="/login"
    >
      <FormRegister
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
      <DialogAlert dialog={dialog} setDialog={setDialog} />
    </AuthLayout>
  );
}
