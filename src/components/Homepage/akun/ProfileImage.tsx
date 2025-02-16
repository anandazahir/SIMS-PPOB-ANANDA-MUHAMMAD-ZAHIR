import Image from "next/image";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileImageProps {
  profileImage: string;
  previewImage: string | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
  isUploading: boolean;
}

export function ProfileImage({
  profileImage,
  previewImage,
  fileInputRef,
  handleUploadImage,
  isEditing,
  isUploading,
}: ProfileImageProps) {
  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleUploadImage}
      />
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <Image
          src={previewImage || profileImage}
          alt="Profile"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>
      <Button
        size="icon"
        variant="outline"
        className="absolute bottom-0 right-0 rounded-full bg-white h-8 w-8 disabled:bg-white"
        onClick={(e) => {
          fileInputRef.current?.click();
          e.preventDefault();
        }}
        disabled={!isEditing || isUploading}
      >
        {isUploading ? (
          <span className="animate-spin h-4 w-4 border-2 border-gray-600 border-t-transparent rounded-full"></span>
        ) : (
          <Pencil className="h-4 w-4" />
        )}
        <span className="sr-only">Edit profile picture</span>
      </Button>
    </div>
  );
}
