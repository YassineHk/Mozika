import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Facebook from './Facebook'
import {Navbar,Nav} from 'react-bootstrap'


export default class Recherche extends Component {

  constructor(){
    super()
    this.state={
      Recherche:"A.L.A"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Mozika</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Login</Nav.Link>
              </Nav>
        <Facebook/>          

            </Navbar.Collapse>
          </Navbar>
        )
    }
}
