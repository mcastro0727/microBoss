import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Login from '../components/Login'
import Signup from '../components/Signup'




class Home extends Component {

    // STATE

    // loggedIn
    // !loggedIn
    // signUp ????


    render() {
        return(
            <React.Fragment>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="/" style={{ fontWeight: "bolder", fontStyle: 'italic' }}>microBoss</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/profile">Profile</Nav.Link>
      
      <Nav.Link href="#contact">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

            <h1>Home</h1>
            <h3>The miniature project boss in your pocket</h3>
            <ul>
                <Login />
                <br/>
                <Signup />
            </ul>

         </React.Fragment>   
                
            
        )
    }



}


export default Home