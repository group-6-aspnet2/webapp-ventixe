import React from "react";
import PropTypes from "prop-types";
import "../../styles/invoice.css";

import SearchIcon from "../../assets/search.svg";
import BellIcon from "../../assets/bell.svg";
import SettingsIcon from "../../assets/settings.svg";
import avatarImg from "../../assets/avatar.png";

export default function PageHeader({ breadcrumbs, title }) {
  return (
    <div className="page-header">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="crumb">
            {crumb}
            {i < breadcrumbs.length - 1 && <span className="sep">/</span>}
          </span>
        ))}
      </div>

      {/* Title and Actions */}
      <div className="header-main">
        <h1 className="header-title">{title}</h1>

        <div className="header-actions">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search anything"
            />
            <button className="search-button">
              <img src={SearchIcon} className="icon" alt="Search" />
            </button>
          </div>

          <button className="icon-button">
            <img src={BellIcon} className="icon" alt="Notifications" />
          </button>
          <button className="icon-button">
            <img src={SettingsIcon} className="icon" alt="Settings"/>
          </button>

          <div className="user-info">
            <img src={avatarImg} alt="Avatar" className="user-avatar" />
            <span className="user-name">Orlando Laurentius</span>
            <p className="user-role">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  title:       PropTypes.string.isRequired,
};