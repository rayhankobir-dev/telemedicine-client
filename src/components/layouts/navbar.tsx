import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { AppLogoIcon } from "@/assets/icons";
import { Search, ShoppingBag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 py-1.5 bg-white border-b ">
      <nav className="container flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 mx-auto">
        <div className="w-full md:w-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <AppLogoIcon />
            <span className="hidden md:block font-bold text-2xl text-primary">
              MedInfo
            </span>
          </Link>

          <div className="md:hidden flex items-center gap-2">
            <UserAccount />
            <CartBag />
          </div>
        </div>

        <form
          className="h-12 w-full md:max-w-xl flex items-center rounded-xl overflow-hidden border border-transparent focus-within:border-primary duration-200"
          action=""
          method="post"
        >
          <Input
            className="h-full w-full items-center bg-primary/10 border-none shadow-none rounded-none outline-none"
            placeholder="Search"
          />
          <button className="h-full px-3.5 bg-primary text-white">
            <Search />
          </button>
        </form>

        <div className="hidden md:flex items-center gap-3.5">
          <CartBag />
          <UserAccount />
        </div>
      </nav>
    </header>
  );
}

function CartBag() {
  return (
    <button className="relative h-11 w-11 flex items-center justify-center text-primary rounded-xl bg-primary/10">
      <ShoppingBag size={20} />
      <span className="absolute -top-1.5 -right-1 w-6 h-5 aspect-square text-[12px] flex items-center justify-center bg-primary text-white rounded-full ml-2">
        20
      </span>
    </button>
  );
}

function UserAccount() {
  return (
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
  );
}

export default Navbar;
