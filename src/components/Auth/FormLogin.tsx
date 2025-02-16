import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./PasswordInput";

interface FormLoginProps {
  register: any;
  handleSubmit: (
    callback: (data: any) => void
  ) => (event: React.FormEvent) => void;
  errors: { email?: { message?: string }; password?: { message?: string } };
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export function FormLogin({
  register,
  handleSubmit,
  errors,
  onSubmit,
  isLoading,
}: FormLoginProps) {
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

      <PasswordInput
        register={register}
        error={errors.password?.message}
        name="password"
        placeholder="Masukkan password"
      />

      <Button
        type="submit"
        variant="submit"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Login
      </Button>
    </form>
  );
}
