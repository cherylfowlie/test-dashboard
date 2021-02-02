import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import ListStandUp from '../../pages/standup';
import ListRelease from '../../pages/release';

function Navigation() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">Test Dashoard</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Tests</Nav.Link>
                  <Nav.Link href="/standup">Stan Up</Nav.Link>
                  <Nav.Link href="/release">Releases</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
              <Route exact path="/">
                <h1>Testing</h1>
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
  )
}


export default Navigation;