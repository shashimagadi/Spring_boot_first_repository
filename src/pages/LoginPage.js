import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./cssFolders/LoginPagecss.css";
import { Input, initMDB } from "mdb-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
initMDB({ Input });
const LoginPage = () => {
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Input });
  }, []);
  console.log("Login page........................");
  console.log("Login page........................");
  console.log("Login page........................");
  console.log("Login page........................");
  return (
    <div>
      <Card className="container">
        <Card.Body>
          <Card.Title className="card-title">Sign in</Card.Title>

          <Card.Text>
            <div class="form-outline" data-mdb-input-init>
              <input type="text" id="form12" class="form-control" />
              <label class="form-label" for="form12">
                User Nmae
              </label>
            </div>
          </Card.Text>

          <Card.Text>
            <div class="form-outline" data-mdb-input-init>
              <input type="text" id="form12" class="form-control" />
              <label class="form-label" for="form12">
                Password
              </label>
            </div>
          </Card.Text>

          {/* <Card.Link href="#">Another Link</Card.Link> */}
          <Card.Text>
            <div className="checkboxText">
              <input type="checkbox"></input>
              <label>Remembered me</label>
            </div>
          </Card.Text>

          {/* <Card.Text></Card.Text> */}
          <Button variant="primary">Submit</Button>
        </Card.Body>
      </Card>

      {/* <div className="form-container">
        <div className="form-wrapper">
          <div class="form-outline" data-mdb-input-init>
            <input type="text" id="form12" class="form-control" />
            <label class="form-label" for="form12">
              User Nmae
            </label>
          </div>

          <div className="form-outline" data-mdb-input-init>
            <input type="password" id="form13" className="form-control" />
            <label className="form-label" htmlFor="form13">
              Password
            </label>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LoginPage;
