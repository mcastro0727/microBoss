import React, { Component } from "react";
import { Col, Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron/index";
import axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      username: "",
      password: "",
      redirectTo: null
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
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/api/profiles/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    {
      if (this.state.isClicked === false)
        return (
              <Col size="md-6">
                <Jumbotron>
                  <h3>
                    <button
                      className="btn btn-dark"
                      onClick={e => {
                        this.setState({ isClicked: true });
                      }}
                    >
                      <p>Login</p>
                    </button>
                  </h3>
                </Jumbotron>
              </Col>
        );
      else
        return (
              <Col size="md-6">
                <Jumbotron>
                  <div className="wrapper">
                    <div className="list">
                      <h5>Login</h5>
                      <form onSubmit={this.handleSubmit} noValidate>
                        <label htmlFor="Email"></label>
                        <input
                          className="info"
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
                            placeholder=" Password"
                            name="email"
                          />
                        </div>
                        <button className="btn btn-primary">
                          <a href="/profile" style={{ color: "white" }}>
                            Confirm
                          </a>
                        </button>
                      </form>
                      <a href="">Forgot Password?</a>
                    </div>
                  </div>
                </Jumbotron>
              </Col>
        );
    }
  }
}

const signUpBox = {
  padding: "50px",
  margin: "10px",
  border: "75px"
};
export default Login;
