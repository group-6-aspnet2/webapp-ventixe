import React from "react";
import PropTypes from "prop-types";
import "../../styles/invoice.css";

export default function StatsCard({ label, count, total }) {
  return (
    <div className="stats-card">
      <div className="stats-label">{label}</div>
      <div className="stats-count">{count}</div>
      <div className="stats-sub">Last month: {total}</div>
    </div>
  );
}

StatsCard.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};