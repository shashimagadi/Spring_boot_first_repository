import React from "react";
import kotak from "./Images/kotak.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
const NavBarFixed = () => {
  return (
    <div className="">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Admin{" "}
              <a href="#login">
                <FaRegUserCircle />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarFixed;
