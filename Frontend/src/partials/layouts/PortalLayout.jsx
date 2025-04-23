import React from "react";
import { Outlet } from "react-router-dom";

const PortalLayout = () => {
  return (
    <div className="portal-layout">
      <aside>aside</aside>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PortalLayout;
