import React from "react";

import Navbar from "@/components/navigation/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
