import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfileSchema, UpdateProfileRequest } from "@/lib/utils/scheme";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateImageProfileMutation,
} from "@/lib/api/services/profileApi";

export function useProfile() {
  const { data: profile, isLoading, refetch } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [updateImageProfile, { isLoading: isUploading }] =
    useUpdateImageProfileMutation();
  const [dialog, setDialog] = useState<{
    open: boolean;
    message: string;
    success: boolean;
  }>({
    open: false,
    message: "",
    success: false,
  });
  
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UpdateProfileRequest>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      profile_image: "",
    },
  });

  if (profile?.data) {
    setValue("email", profile.data.email || "");
    setValue("first_name", profile.data.first_name || "");
    setValue("last_name", profile.data.last_name || "");
    setValue("profile_image", profile.data.profile_image || "");
  }

  const onSubmit = async (data: UpdateProfileRequest) => {
    try {
      const response = await updateProfile(data).unwrap();
      setDialog({ open: true, message: response.message, success: true });
      refetch();
    } catch (err: any) {
      if (err.data?.message === "Parameter last_name harus di isi") {
        setError("last_name", { message: "Nama belakang harus diisi." });
        setValue("last_name", "");
      } else if (err.data?.message === "Parameter first_name harus di isi") {
        setError("first_name", { message: "Nama depan harus diisi." });
        setValue("first_name", "");
      } else {
        setDialog({
          open: true,
          message: "Gagal Mengubah Profil",
          success: false,
        });
      }
    }
  };

  const handleUploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (!event.target.files?.[0]) return;

      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png"];

      if (!allowedTypes.includes(file.type)) {
        alert("Format file tidak didukung! Hanya JPEG dan PNG diperbolehkan.");
        return;
      }

      if (file.size > 100 * 1024) {
        alert("Ukuran file terlalu besar! Maksimal 100 KB.");
        return;
      }
      setPreviewImage(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("file", file);

      await updateImageProfile(formData).unwrap();
    } catch (err: any) {
      console.error("Upload gagal:", err);
      setDialog({
        open: true,
        message: "Gagal Menggunggah Foto",
        success: false,
      });
    }
  };

  return {
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
  };
}
