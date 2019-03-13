import React, { Component } from 'react';
import './App.css';
import Flashs from "./Flashs";
import { Container, Header, Button, Icon, Segment, } from "semantic-ui-react"; 
import FlashForm from "./FlashForm";

class App extends Component {
  state = { 
    flashs: [
      { id: 1, front: "What is the total number of dots on a pair of dice?", back: "42", },
      { id: 2, front: "Mount Everest is found in which mountain range?", back: "The Himalayas", },
      { id: 3, front: "How many strings does a violin have?", back: "4", },
    ],
    showForm: false,
    frontShown: true,
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);
  
  addFlash = (flashData) => {
    let flash = { id: this.getId(), ...flashData, };
    this.setState({ flashs: [...this.state.flashs, flash], });
  };

  removeFlash = (id) => {
    const flashs = this.state.flashs.filter( flash => {
      if (flash.id !== id)
        return flash
    });
    this.setState({ flashs: [...flashs], });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });
  
  render() {
    return (
      <Container textAlign="center" style={{ paddingTop: "25px" }}>
        <Header as="h1">React Flash Card List</Header>
        <Header as="h4">Click to Add New Card</Header>
        <br />
        
        <div>
        <Segment basic>
        <Button icon color="blue" onClick={this.toggleForm}>
        <Icon name={`angle double ${this.state.showForm ? "up" : "down"}`} />
        </Button>
        { this.state.showForm ? <FlashForm add={this.addFlash} /> : null }
        </Segment>
        </div>
        <br />
        <Flashs flashs={this.state.flashs} 
        remove={this.removeFlash} />
      </Container>
    );
  }
}

export default App;