import React, { useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <main className="pt-[12vh] md:pt-[14vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout