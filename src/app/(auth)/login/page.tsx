"use client";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { FormLogin } from "@/components/Auth/FormLogin";
import { useLogin } from "@/lib/hooks/useLogin";
import { DialogAlert } from "@/components/ui/AlertDialog";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    dialog,
    setDialog,
  } = useLogin();
  return (
    <AuthLayout
      textLink="Belum punya akun? Registrasi"
      textTitle="Masuk atau buat akun untuk memulai"
      href="/register"
    >
      <FormLogin
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
