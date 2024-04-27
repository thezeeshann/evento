"use client";
import Link from "next/link";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All events",
    href: "/events/all",
  },
];

const Header = () => {
  const activePath = usePathname();

  return (
    <header className="flex items-center justify-between h-14 border-b border-white/10 px-3 md:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full text-sm gap-x-6">
          {routes.map((route) => (
            <li
              key={route.name}
              className={cn(
                "hover:text-white relative items-center flex transition",
                {
                  "text-white": activePath === route.href,
                  "text-white/50": activePath !== route.href,
                }
              )}
            >
              <Link href={route.href}>{route.name}</Link>
              {activePath === route.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent absolute h-1 w-full bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
