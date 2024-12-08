import CartBag from "./cart-bag";
import { Search } from "lucide-react";
import { Input } from "../../ui/input";
import { Link } from "react-router-dom";
import UserAccount from "./user-account";
import { AppLogoIcon } from "@/assets/icons";

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

export default Navbar;
