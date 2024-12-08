import { X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function ModalClose({ className = "" }) {
  return (
    <Button
      className={cn(
        "flex justify-center items-center w-9 h-9 p-0 bg-primary/10 border border-primary hover:bg-primary/20 text-black",
        className
      )}
    >
      <X size={20} />
    </Button>
  );
}
