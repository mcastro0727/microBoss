import React, { Component } from "react";
import { Col, Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron/index";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      username: "",
      password: "",
      confirmPassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();
    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    {
      if (this.state.isClicked === false)
        return (
          <Container>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h3>
                    {" "}
                    <button
                      className="btn btn-dark"
                      onClick={e => {
                        this.setState({ isClicked: true });
                      }}
                    >
                      <p>Sign Up</p>
                    </button>
                  </h3>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      else
        return (
          <Container>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <div className="wrapper">
                    <div className="list">
                      <h5>Create Account</h5>
                      <form onSubmit={this.handleSubmit} noValidate>
                        <label htmlFor="Email"></label>
                        <input
                          type="text"
                          className=""
                          id="Email"
                          placeholder=" Your Email Here"
                          name="email"
                        />
                        <div className="list">
                          <label htmlFor="Password"></label>
                          <input
                            type="password"
                            className=""
                            id="Password"
                            placeholder=" Create a password"
                            name="email"
                          />
                        </div>
                        <button className="btn btn-primary">
                          <a href="/profile" style={{ color: "white" }}>
                            Confirm
                          </a>
                        </button>
                      </form>
                      <a href="/">Forgot Password?</a>
                    </div>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
    }
  }
}

const signUpBox = {
  padding: "50px",
  margin: "10px",
  border: "75px"
};

export default SignUp;
