import { cn } from "@/lib/utils";
import { PillBottle } from "lucide-react";
import { NavLink } from "react-router-dom";
import Doctor from "@/assets/vectors/doctor.svg";
import { Button } from "../ui/button";

const links = [
  {
    label: "Medicines",
    icon: PillBottle,
    to: "/medicines",
  },
  {
    label: "Surgical",
    icon: PillBottle,
    to: "/category/surgical",
  },
  {
    label: "Diagnostic",
    icon: PillBottle,
    to: "/category/diagnostic",
  },
  {
    label: "Health Care",
    icon: PillBottle,
    to: "/category/healthcare",
  },
  {
    label: "Other",
    icon: PillBottle,
    to: "/category/other",
  },
];

function SideNav() {
  return (
    <aside className="h-[80vh] w-full sticky top-[4.5rem] flex flex-col justify-between mt-5 rounded-2xl bg-gray-100 border border-primary/10 shadow-sm overflow-hidden">
      <div className="flex flex-col">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                "flex items-center py-3 px-3 text-md hover:bg-primary/10 border-b border-primary/10 font-medium tracking-tighter",
                isActive && "bg-primary/80 text-white hover:bg-primary/90"
              )
            }
            key={link.label}
            to={link.to}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 bg-primary-foreground p-5">
        <img className="max-w-[150px] mx-auto" src={Doctor} alt="Vector" />
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
