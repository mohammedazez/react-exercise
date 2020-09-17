import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page
import RegisterForm from "./pages/RegisterForm";
import BMI from "./pages/BMI";
import Uppercase from "./pages/Uppercase";
import Todos from "./pages/Todos";

// Component
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <RegisterForm />
          </Route>
          <Route path="/uppercase">
            <Uppercase />
          </Route>
          <Route path="/bmi">
            <BMI />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
