import React, { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}

export default Container;
