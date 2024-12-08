import Footer from "./footer";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-[7.5rem] md:pt-[4.5rem] lg:pt-16 w-full h-fit flex flex-col">
        <main className="container w-full flex flex-1 gap-4 mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
