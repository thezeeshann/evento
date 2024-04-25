import Link from "next/link";
import React from "react";

const routes = [
  {
    name: "Terms & conditions",
    href: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small>&copy; 2025 thezeeshann. All rights reserved</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
