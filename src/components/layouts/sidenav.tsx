import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import Doctor from "@/assets/vectors/doctor.png";
import Medicine from "@/assets/vectors/medicines.png";
import DoctorVector from "@/assets/vectors/doctor.svg";

const links = [
  {
    label: "Medicines",
    icon: Medicine,
    to: "/medicines",
  },
  {
    label: "Surgical",
    icon: Doctor,
    to: "/category/surgical",
  },
];

function SideNav() {
  return (
    <aside className="h-[80vh] w-full sticky top-[4.5rem] flex flex-col justify-between mt-5 rounded-2xl bg-primary-foreground border border-primary/20 shadow-sm overflow-hidden">
      <div className="flex flex-col">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 py-2.5 px-3 text-md bg-primary/5 hover:bg-primary/10 border-b border-primary/20 font-medium text-lg",
                isActive && "bg-primary/30 text-primary hover:bg-primary/30"
              )
            }
            key={link.label}
            to={link.to}
          >
            <img
              className="h-10 w-10 rounded-full"
              src={link.icon}
              alt={link.label}
            />
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 bg-primary-foreground p-5">
        <img
          className="max-w-[150px] mx-auto"
          src={DoctorVector}
          alt="Vector"
        />
        <h1 className="font-medium text-lg">Free Consultation</h1>
        <p className="font-medium light text-sm text-center opacity-70">
          Take free Consultation with our doctors for free firt time.
        </p>

        <Button>Appoinment</Button>
      </div>
    </aside>
  );
}

export default SideNav;
