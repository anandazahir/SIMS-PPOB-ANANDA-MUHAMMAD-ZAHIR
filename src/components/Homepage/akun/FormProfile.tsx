import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoutButton from "./LogoutButton";

interface ProfileFormProps {
  register: any;
  errors: any;
  isEditing: boolean;
  handleSubmit: (
    callback: (data: any) => void
  ) => (event: React.FormEvent) => void;
  onSubmit: (data: any) => void;
  isUpdating: boolean;
  setIsEditing: (value: boolean) => void;
}

export function ProfileForm({
  register,
  errors,
  isEditing,
  handleSubmit,
  onSubmit,
  isUpdating,
  setIsEditing,
}: ProfileFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email"
        type="email"
        disabled
        leftIcon={<Mail className="h-5 w-5" />}
        register={register}
        name="email"
        error={errors.email?.message}
      />

      <Input
        label="Nama Depan"
        type="text"
        disabled={!isEditing}
        leftIcon={<User className="h-5 w-5" />}
        register={register}
        name="first_name"
        error={errors.first_name?.message}
      />

      <Input
        label="Nama Belakang"
        type="text"
        disabled={!isEditing}
        leftIcon={<User className="h-5 w-5" />}
        register={register}
        name="last_name"
        error={errors.last_name?.message}
      />

      {!isEditing ? (
        <>
          <Button
            variant="outlinePrimary"
            onClick={() => setIsEditing(true)}
            type="button"
          >
            Edit Profile
          </Button>
          <LogoutButton />
        </>
      ) : (
        <Button type="submit" variant="submit" disabled={isUpdating}>
          Simpan
        </Button>
      )}
    </form>
  );
}
