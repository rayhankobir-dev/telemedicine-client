import { cn } from "@/lib/utils";
import { PillBottle } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    label: "OTC Medicine",
    icon: PillBottle,
    to: "/",
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
    <aside className="h-[80vh] w-full flex flex-col mt-2 py-3 rounded-2xl bg-gray-100 shadow-sm">
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              "flex items-center py-3 px-3 text-md hover:bg-primary/10 border-b font-medium tracking-tighter",
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
    </aside>
  );
}

export default SideNav;
