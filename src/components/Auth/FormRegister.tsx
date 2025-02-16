import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./PasswordInput";

interface FormRegisterProps {
  register: any;
  handleSubmit: (
    callback: (data: any) => void
  ) => (event: React.FormEvent) => void;
  errors: {
    email?: { message?: string };
    first_name?: { message?: string };
    last_name?: { message?: string };
    password?: { message?: string };
    confirmPassword?: { message?: string };
  };
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export function FormRegister({
  register,
  handleSubmit,
  errors,
  onSubmit,
  isLoading,
}: FormRegisterProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        type="email"
        name="email"
        register={register}
        placeholder="Masukkan email"
        leftIcon={<Mail className="h-5 w-5 text-gray-400" />}
        error={errors.email?.message}
      />
      <Input
        type="text"
        name="first_name"
        register={register}
        placeholder="Masukkan Nama Depan"
        leftIcon={<User className="h-5 w-5 text-gray-400" />}
        error={errors.first_name?.message}
      />
      <Input
        type="text"
        name="last_name"
        register={register}
        placeholder="Masukkan Nama Belakang"
        leftIcon={<User className="h-5 w-5 text-gray-400" />}
        error={errors.last_name?.message}
      />
      <PasswordInput
        register={register}
        error={errors.password?.message}
        name="password"
        placeholder="Masukkan password"
      />
      <PasswordInput
        register={register}
        error={errors.confirmPassword?.message}
        name="confirmPassword"
        placeholder="Masukkan konfirmasi password"
      />

      <Button
        type="submit"
        variant="submit"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Daftar
      </Button>
    </form>
  );
}
