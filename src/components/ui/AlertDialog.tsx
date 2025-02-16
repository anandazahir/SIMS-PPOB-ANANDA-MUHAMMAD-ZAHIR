import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle2, XCircle } from "lucide-react";

interface DialogAlert {
  dialog: { open: boolean; message: string; success: boolean };
  setDialog: (dialog: {
    open: boolean;
    message: string;
    success: boolean;
  }) => void;
}

export function DialogAlert({ dialog, setDialog }: DialogAlert) {
  return (
    <AlertDialog
      open={dialog.open}
      onOpenChange={(open) => setDialog({ ...dialog, open })}
    >
      <AlertDialogContent className="max-w-[280px] gap-0">
        <AlertDialogHeader className="gap-4 text-center">
          {dialog.success ? (
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          ) : (
            <XCircle className="mx-auto h-12 w-12 text-destructive" />
          )}

          <AlertDialogTitle className="text-2xl font-semibold text-center space-y-2">
            {dialog.message}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-5">
          <AlertDialogAction
            className="w-full font-normal bg-transparent text-primary shadow-[0px] hover:underline hover:bg-transparent"
            onClick={() =>
              setDialog({ open: false, message: "", success: false })
            }
          >
            Kembali ke Beranda
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
