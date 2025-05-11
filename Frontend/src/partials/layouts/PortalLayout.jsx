import React from "react";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";

const PortalLayout = () => {
  return (
    <>
      <div className="portal-layout">
        <aside>aside</aside>
        <header>
          <img alt="ventixe-logo" src="/Logo.svg" />
          <span>Header</span>
          <HamburgerMenu />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PortalLayout;
