import React from "react";
import Dashboard from "./Dashboard";
import kotak from "./Images/kotak.png";
import NavBarFixed from "./NavBarFixed";
import { useNavigate } from "react-router-dom";

const CreateRequestFirst = () => {
  const token = localStorage.getItem("token");
  console.log("token in dashboard  ", token);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/report");
  };
  return (
    <div className="d-flex col-md-12">
      <div className="col-md-2 dashboard">
        <Dashboard />
      </div>

      <div className="col-md-10">
        <NavBarFixed />

        <div className="d-flex col-md-12 request-container ">
          <label>Create Request</label>

          <button className="btnCreate" onClick={handleNavigate}>
            Create Request
          </button>
        </div>

        <div className="req">
          <img src={kotak} className="logo" alt="Your Logo" />
        </div>
      </div>
    </div>
  );
};

export default CreateRequestFirst;
