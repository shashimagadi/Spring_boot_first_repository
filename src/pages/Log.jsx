import React, { useEffect, useState } from "react";
import "./cssFolders/Log.css";
import { Input, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { baseURL } from "./Api_URL/baseURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [showPassword, setShowPassword] = useState(false);
  initMDB({ Input });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Input });
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("not successs", formData);
    try {
      // Example of using fetch to POST data to backend API
      const response = await fetch(
        "http://localhost:3001/login/loginDetails/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("response  :", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const { token, user } = data;
      navigate("/report");

      // Store tokens in localStorage
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", user);

      console.log("Login successful:", data);
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error state or display error message to the user
    }
  };
  return (
    <div>
      <div className="container2">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title ">
            <label>Sign In</label>
          </div>

          <div className="form-outline" data-mdb-input-init>
            <input
              type="text"
              id="form12"
              className="form-control shashy"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label className="form-label" for="form12">
              User Name
            </label>
          </div>

          <div className="form-outline" data-mdb-input-init>
            <input
              type="text"
              id="form12"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label className="form-label" for="form12">
              Password
            </label>
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </span>
          </div>
          <div className="checkboxText mb-3 ">
            <input type="checkbox" className="checkBox"></input>
            <label className="checkboxLabel">Remembered me</label>
          </div>

          <button type="submit" className="btnn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Log;
