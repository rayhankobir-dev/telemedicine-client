import { AppLogoIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-10 mt-16 border-t">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <Link to="/" className="flex items-center gap-2">
                <AppLogoIcon />
                <span className="font-bold text-2xl text-primary">MedInfo</span>
              </Link>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-medium">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-light hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid lg:flex items-baseline justify-between gap-4 pt-10">
            <p className="order-2 font-light text-sm text-muted-foreground text-center lg:text-left">
              Copyright © 2023 - All right reserved
            </p>
            <img
              className="w-full max-w-xl order-1 mx-auto"
              src={"https://www.ghureashi.xyz/assets/payment-logo-DqygCPo1.png"}
              alt=""
            />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
