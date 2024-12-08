import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import LoginDialog from "@/components/login/login-dialog";

function UserAccount() {
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleOpen = () => {
    setLoginOpen(true);
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 py-1 px-1.5 md:py-1 md:px-1.5 hover:bg-primary/10 border hover:border-primary/30 rounded-xl duration-200"
      >
        <Avatar className="w-9 h-9">
          <AvatarFallback className="bg-primary/20 text-primary">
            AA
          </AvatarFallback>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>

        <div className="flex flex-col items-start text-xs md:text-sm text-nowrap">
          <p className="tracking-tighter">Hi, User</p>
          <p className="font-medium tracking-tighter">Accounts & Orders</p>
        </div>
      </button>
      <LoginDialog open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}

export default UserAccount;
