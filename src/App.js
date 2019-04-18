import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote'
import Quotes from './components/Quotes'
import Lamp from './components/Lamp'

class App extends Component {
  state = {
    working: true
  }

  handleClick = (event) => {
    this.setState({working: !this.state.working})
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working? 'logo' : 'logoFast'} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}></button>
        <Lamp on />
        <Lamp />
        <Quote 
          quote="Shoplifting is a victimless crime, like punching someone in the dark."
          character="Nelson Muntz"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />

        <Quotes />
      </div>
    );
  }
}

export default App;
