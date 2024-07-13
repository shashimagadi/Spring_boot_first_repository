import React, { useEffect, useState } from "react";
import NavBarFixed from "./NavBarFixed";
import Dashboard from "./Dashboard";
import { Input, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import axios from "axios";
import { baseURL } from "./Api_URL/baseURL";

let api = process.env.REACT_APP_API_KEY;
const ReportDetails = () => {
  initMDB({ Input });

  useEffect(() => {
    // Initialize MDB components
    initMDB({ Input });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    ticketNumber: "",
    description: "",
    options: {
      statementDetails: false,
      beneficiaryDetails: false,
      ipLogs: false,
    },
  });

  console.log("form data", api);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      if (
        name === "statementDetails" ||
        name === "beneficiaryDetails" ||
        name === "ipLogs"
      ) {
        return {
          ...prevData,
          options: {
            ...prevData.options,
            [name]: checked,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken"); // Retrieve token from localStorage
      console.log("base url ", token);
      if (!token) {
        alert("No token found in localStorage");
        return;
      }
      const response = await axios.post(
        "http://localhost:3001/reportDetails/report",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );
      console.log("Data inserted successfully:", response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
      // Check if the error response status is 401 (Unauthorized)
      if (error.response && error.response.status === 401) {
        alert("Session ended");
        // Optionally, you can clear the token from localStorage and redirect the user to the login page
        localStorage.removeItem("accessToken");
        // window.location.href = "/login"; // Uncomment this line to redirect to the login page
      }
    }
  };

  return (
    <div className="d-flex col-md-12">
      <div className="col-md-2 dashboard">
        <Dashboard />
      </div>

      <div className="col-md-10">
        <NavBarFixed />

        <label className="createReq">Cretae Request</label>
        <div className=" report col-md-11">
          <div className="row">
            <div className="col-md-5">
              <div
                className="form-outline"
                data-mdb-input-init
                style={{ marginLeft: "20px" }}
              >
                <input
                  type="text"
                  id="form12"
                  name="ticketNumber"
                  className="form-control"
                  placeholder="Enter Ticket Number"
                  value={formData.ticketNumber}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form12">
                  Ticket Number
                </label>
              </div>
            </div>

            <div className="col-md-5">
              <div
                className="form-outline "
                data-mdb-input-init
                style={{ marginLeft: "20px" }}
              >
                <input
                  type="text"
                  id="form13"
                  className="form-control"
                  placeholder="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form13">
                  Description
                </label>
              </div>
            </div>
            <div className="col-md-10" style={{ marginLeft: "20px" }}>
              <div className="form-outline" data-mdb-input-init>
                <input
                  type="text"
                  id="dropdownInput"
                  className="form-control "
                  placeholder="Select Options"
                  onClick={toggleDropdown}
                />
                <label className="form-label" style={{ marginLeft: "20px" }}>
                  Select Options
                </label>
              </div>
              <div className={`collapse ${isOpen ? "show" : ""}`}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="option1"
                    name="statementDetails"
                    checked={formData.options.statementDetails}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="option1">
                    Statement Details
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="option2"
                    name="beneficiaryDetails"
                    checked={formData.options.beneficiaryDetails}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="option2">
                    Beneficiary Details
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="option3"
                    name="ipLogs"
                    checked={formData.options.ipLogs}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="option3">
                    IP Logs
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btnReport mt-4" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
