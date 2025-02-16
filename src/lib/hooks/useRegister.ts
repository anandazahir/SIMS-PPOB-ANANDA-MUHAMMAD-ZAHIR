import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/lib/api/services/authApi";
import { RegisterRequest, RegisterSchema } from "@/lib/utils/scheme";
import { useState } from "react";

export function useRegister() {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [dialog, setDialog] = useState<{
    open: boolean;
    message: string;
    success: boolean;
  }>({
    open: false,
    message: "",
    success: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterRequest> = async (
    data: RegisterRequest
  ) => {
    try {
      const response = await registerUser(data).unwrap();
      router.push("/login");
      setDialog({
        open: true,
        message: response.message,
        success: true,
      });
    } catch (err: any) {
      if (err.data.message === "Email sudah terdaftar") {
        setError("email", { type: "manual", message: "Email sudah terdaftar" });
      } else {
        setDialog({
          open: true,
          message: "Gagal Registrasi",
          success: false,
        });
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    setDialog,
    dialog,
  };
}
