import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Alert } from "react-bootstrap";
import ListStandUp from "../pages/standup";
import ListRelease from "../pages/release";

import { useAuth } from "../../contexts/AuthContext";

function Navigation() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">Test Dashboard</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/create">Create Stand up</Nav.Link>
                  <Nav.Link href="/user">User</Nav.Link>
                  <Nav.Link href="/release">Releases</Nav.Link>
                  <Button variant="link" onClick={handleLogout}>
                    Log Out
                  </Button>
                  {error && <Alert variant="danger">{error}</Alert>}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/standup">
                <ListStandUp />
              </Route>
              <Route path="/release">
                <ListRelease />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
