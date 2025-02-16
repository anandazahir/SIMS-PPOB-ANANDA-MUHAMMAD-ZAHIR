import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginRequest } from "@/lib/utils/scheme";
import { useLoginMutation } from "@/lib/api/services/authApi";
import { cookies } from "@/lib/utils/cookies"; // Import helper cookies
import { useState } from "react";

export function useLogin() {
  const [loginUser, { isLoading }] = useLoginMutation();

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
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      setDialog({ open: true, message: response.message, success: true });
      cookies.set("token", response.data.token, { expires: 7 });
      window.location.href = "/";
    } catch (err: any) {
      if (err.data.status === 103) {
        setError("email", { type: "manual", message: err.data.message });
        setError("password", { type: "manual", message: err.data.message });
      } else {
        setDialog({
          open: true,
          message: "Login Gagal, Silahkan Coba Lagi",
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
    dialog,
    setDialog,
  };
}
