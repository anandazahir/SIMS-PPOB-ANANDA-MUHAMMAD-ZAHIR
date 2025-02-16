import { cookies } from "@/lib/utils/cookies";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogAlert } from "@/components/ui/AlertDialog";
export default function LogoutButton() {
  const [dialog, setDialog] = useState<{
    open: boolean;
    message: string;
    success: boolean;
  }>({
    open: false,
    message: "",
    success: false,
  });

  const handleLogout = () => {
    setDialog({ open: true, message: "Anda berhasil logout", success: true });
    cookies.remove("token");
    redirect("/");
  };

  return (
    <>
      <Button variant="submit" onClick={handleLogout} type="button">
        LogOut
      </Button>
      <DialogAlert dialog={dialog} setDialog={setDialog} />
    </>
  );
}
