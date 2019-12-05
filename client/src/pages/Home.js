import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Login from "../components/Login";
import Signup from "../components/Signup";
import "../index.css";
import EpicMenu from "../components/EpicMenu/EpicMenu";
import { Container, Col, Row } from "../components/Grid/index";

class Home extends Component {
  // STATE

  // loggedIn
  // !loggedIn
  // signUp ????

  render() {
    let links = [
      { label: "Home", link: "/" },
      { label: "Profile", link: "/profile" }
    ];

    return (
      <React.Fragment>
        <div className="container center">
          <EpicMenu links={links} />
        </div>

        <Container>
          <Row>
              <Login />
              <Signup />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
