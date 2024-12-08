import React from "react";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import toast from "react-hot-toast";

function UserAccount() {
  const [open, setOpen] = React.useState(false);
  const isAuth = false;

  const handleOpen = () => {
    if (isAuth) {
      setOpen(!open);
      return;
    }
    toast.error("Please login first");
  };
  return (
    <DropdownMenu open={open} onOpenChange={handleOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 py-1 px-1.5 md:py-1 md:px-1.5 hover:bg-primary/10 border hover:border-primary/30 rounded-xl duration-200">
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-red-50 text-red-500 focus:text-red-600">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccount;
