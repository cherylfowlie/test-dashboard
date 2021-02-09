import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ListRelease from "./pages/release";

import CreateUser from "./main/create-user.component";
import CreateStandup from "./main/create-standup.component";
import EditStandup from "./main/edit-standup.component";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          {/* Signup Routing */}
          <Route path="/update" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/release" component={ListRelease} />
          {/* Standup Routing */}
          <Route path="/user" component={CreateUser} />
          <Route path="/create" component={CreateStandup} />
          <Route path="/edit/:id" component={EditStandup} />

        </Switch>
      </AuthProvider>
    </Router>

  )
}

export default App
