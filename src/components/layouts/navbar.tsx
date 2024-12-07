import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { AppLogoIcon } from "@/assets/icons";
import { Search, ShoppingBag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 py-1.5 bg-white border-b ">
      <nav className="container flex items-center justify-between gap-4 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <AppLogoIcon />
          <span className="font-bold text-2xl text-primary">MedInfo</span>
        </Link>

        <form
          className="h-12 w-full max-w-xl flex items-center rounded-xl overflow-hidden border border-transparent focus-within:border-primary duration-200"
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

        <div className="flex items-center gap-2">
          <button className="relative h-11 w-11 flex items-center justify-center text-primary rounded-xl">
            <ShoppingBag size={25} />
            <span className="absolute top-0 right-0 w-5 h-5 text-sm flex items-center justify-center bg-primary text-white rounded-full ml-2">
              0
            </span>
          </button>

          <button className="flex items-center gap-2 py-1 px-1.5 hover:bg-primary/10 border hover:border-primary/30 rounded-xl duration-200">
            <Avatar className="w-9 h-9">
              <AvatarFallback className="bg-primary/20 text-primary">
                AA
              </AvatarFallback>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div className="flex flex-col items-start text-nowrap">
              <p className="text-sm tracking-tighter">Hi, User</p>
              <p className="font-medium text-sm tracking-tighter">
                Accounts & Orders
              </p>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
