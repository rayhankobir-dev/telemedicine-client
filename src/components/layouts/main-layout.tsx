import Footer from "./footer";
import Navbar from "./navbar/navbar";
import SideNav from "./sidenav";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-[7.5rem] md:pt-[4.5rem] lg:pt-16 w-full h-fit flex flex-col">
        <main className="container w-full flex flex-1 gap-4 mx-auto">
          <div className="hidden lg:block min-w-72 w-72">
            <SideNav />
          </div>

          <div className="flex-1 mt-2 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
