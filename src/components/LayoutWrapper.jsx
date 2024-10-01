"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/register" && pathname !== "/contact" && <Header />}
      {children}
      {pathname !== "/register" && pathname !== "/contact" && <Footer />}
    </>
  );
};

export default LayoutWrapper;
