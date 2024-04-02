import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}

export default Container;
