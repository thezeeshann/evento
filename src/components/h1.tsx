import { cn } from "@/lib/utils";
import React from "react";

type H1Pops = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: H1Pops) => {
  return (
    <h1
      className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
