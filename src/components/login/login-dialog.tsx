import React from "react";
import LoginForm from "./login-form";
import { Dialog, DialogContent } from "../ui/dialog";
import CheckoutVector from "@/assets/vectors/checkout.svg";

export default function LoginDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="lg:max-w-4xl p-0">
        <div className="grid lg:grid-cols-2 mt-5">
          <div className="hidden lg:flex flex-col justify-center items-center p-5">
            <img className="max-w-[300px]" src={CheckoutVector} alt="" />

            <div className="flex flex-col items-center gap-2.5">
              <h1 className="font-bold text-lg text-center">
                Quick & Easy Ordering Process
              </h1>
              <p className="font-light text-sm text-center">
                Now you can order your medicine from Arogga. We provide all the
                medicines you need.
              </p>
            </div>
          </div>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
