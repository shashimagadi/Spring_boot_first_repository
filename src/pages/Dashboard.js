import React from "react";

import kotak from "./Images/kotak.png";
import "./cssFolders/Log.css";
import { MdDashboard } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrDashboard } from "react-icons/gr";

const Dashboard = () => {
  return (
    <div className=" dashboard">
      <div className="image">
        <img
          src={kotak} // Path to your image file
          className="navbar-logo"
          alt="Your Logo"
        />
      </div>
      <div className="mdDash">
        <MdDashboard />
        <label>Dashborad</label>
      </div>
      <div className="mdDash">
        <MdOutlineDashboardCustomize />
        <label>create request</label>
      </div>
      <div className="mdDash">
        <GrDashboard />
        <label>updtae request</label>
      </div>
    </div>
  );
};

export default Dashboard;
