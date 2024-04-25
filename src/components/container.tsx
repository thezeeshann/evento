import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl flex flex-col min-h-screen mx-auto bg-white/[2%]">
      {children}
    </div>
  );
};

export default Container;
