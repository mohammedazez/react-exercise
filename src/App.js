import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page
import RegisterForm from "./pages/Registerform/RegisterForm";
import BMI from "./pages/BMI/BMI";
import Uppercase from "./pages/Uppercase/Uppercase";
import Todos from "./pages/Todos/Todos";
import CounterClass from "./pages/Counter/CounterClass";
import CounterFunction from "./pages/Counter/CounterFunction";
import ListProduct from "./pages/ListProduct/ListProduct";

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
          <Route path="/counter">
            <CounterClass />
            <CounterFunction />
          </Route>
          <Route path="/listproduct">
            <ListProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
