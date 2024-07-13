import React from "react";
import Dashboard from "./Dashboard";
import NavBarFixed from "./NavBarFixed";
import { Outlet } from "react-router-dom";

const LayoutFixed = () => {
  return (
    <div className="d-flex col-md-12">
      <div className="col-md-2 dashboard">
        <Dashboard />
      </div>

      <div className="col-md-10">
        <NavBarFixed />
        {/* <Outlet /> */}
        
      </div>
    </div>
  );
};

export default LayoutFixed;
