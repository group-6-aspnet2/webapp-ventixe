import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/hamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [listItems, setListItems] = useState([
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/bookings",
      name: "Bookings",
    },
    {
      path: "/profile",
      name: "Profile",
    },
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-group">
      <button className="hamburger-menu-button" onClick={toggleMenu}>
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-bars"></i>
        )}
      </button>

      <ul className={"hamburger-menu-list" + (isOpen ? " open" : "")}>
        {listItems.map((item, index) => (
          <li key={index} className="hamburger-menu-item">
            <NavLink to={item.path} className="hamburger-menu-link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HamburgerMenu;
