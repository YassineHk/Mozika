import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Recherche'
import ListeMsq from './components/ListeMsq'
import { Form, Button, Row, Col } from 'react-bootstrap'



class App extends Component {

  constructor() {
    super()
    this.state = {
      Recherche: "2019"
    }

  }

  handleChange() {
    this.setState({
      Recherche: document.getElementById(1).value
    })
    console.log(this.state.Recherche)
    this.forceUpdate(this.ListeMsq)
    //this.componentWillUnmount()
 }

  

  render() {

    return (
      <div className="App">
        <NavBar />
        <br />
        <Row>
          <Col lg="11" ><Form.Control id="1" type="text" placeholder="Recherche..." onChange={this.handleChange.bind(this)} /></Col>
          <Col><Button variant="outline-success" onClick={this.handleChange.bind(this)} >Search</Button></Col>
        </Row>
        <ListeMsq req={this.state.Recherche} />
      </div>
    );

  }
}

export default App;
