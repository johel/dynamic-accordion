import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAccordion from './Accordion';
// import Accordion from 'react-responsive-accordion';
import Collapsible from 'react-collapsible';

let Content1 = () => {
  return( 
    <div style={{padding:'10px'}}>
      <p>Olá, essa é uma descrição genérica</p>
      <p>Olá, essa é uma descrição genérica</p>
      <p>Olá, essa é uma descrição genérica</p>
      <p>Olá, essa é uma descrição genérica</p>
      <p>Olá, essa é uma descrição genérica</p>
      <p>Olá, essa é uma descrição genérica</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MyAccordion renderContent={() => <Content1/>}/>
        <MyAccordion renderContent={() => <Content1/>}/>

      </div>
    );
  }
}

export default App;
