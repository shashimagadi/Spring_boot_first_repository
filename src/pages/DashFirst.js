import React from "react";
import kotak from "./Images/kotak.png";
import Dashboard from "./Dashboard";
import NavBarFixed from "./NavBarFixed";

const DashFirst = () => {
  return (
    // <div>
    //   <Dashboard />
    //   <div className="request">
    //     <div className="dashboard-btns">
    //       <label>Dashboard</label>
    //       <button type="submit" className="btnCreateReq">
    //         Create Request
    //       </button>
    //     </div>

    //     <div className="dashContainer">
    //       <div className="centerImage">
    //         <img src={kotak} className="createReqImage" alt="Your Logo" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="d-flex col-md-12">
      <div className="col-md-2 dashboard">
        <Dashboard />
      </div>

      <div className="col-md-10">
        <NavBarFixed />
        <div>
          <div className="request">
            <div className="dashboard-btns">
              <label>Dashboard</label>
              <button type="submit" className="btnCreateReq">
                Create Request
              </button>
            </div>

            <div className="dashContainer">
              <div className="centerImage">
                <img src={kotak} className="createReqImage" alt="Your Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFirst;
