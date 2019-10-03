import React from 'react';
import './App.css';
import { Nav, Button, Form, Navbar, FormControl } from 'react-bootstrap';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./logo.svg";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import About from "./components/About";
import Home from "./components/Home";

function App() {

  return (
      <div className="body">
        <>
          <Router>
          <Navbar bg="light" variant="light">
            <img src={logo} width="100" height="50" />
            <Nav className="mr-auto">
              <ul>
                <li>
                  <Link className="tags" to="/home">Почетна</Link>
                </li>
                <li>
                  <Link className="tags" to="/about">За нас</Link>
                </li>
              </ul>
            </Nav>
            <Nav inline>
              <ul>
                <li>
                  <Link className="tags" to="/login">Логирај се</Link>
                </li>
                <li>
                  <Link className="tags" to="/register">Регистрирај се</Link>
                </li>
              </ul>
            </Nav>
          </Navbar>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Router>
        </>

      <Footer />
      </div>
      );
}

export default App;
