import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAccordion from './Accordion';

var HeaderContainerStyle = {
  display:'flex',
  padding:'10px',
  backgroundColor: '#eee'
};

var titleToggleStyle = {
  minWidth:'100px',
  borderLeft:'2px solid purple',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc'
}

var titleStyle = {
  flex:1,
  backgroundColor: '#eee'
}

let Header1 = (onClick) => (
  <div onClick={onClick} style={HeaderContainerStyle}>
    <div style={titleStyle}>
      <p>Esse é o título do accordion</p>
    </div>
  </div>
)

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

let Content2 = () => <h1>Hey</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MyAccordion 
          renderContent={() => <Content1/>}
          renderHeader={({isOpen, toggle}) => (
            <div onClick={toggle}>Oi eu sou um header e o accordion está: {isOpen? 'aberto' : 'fechado'}</div>
          )}
        />

      </div>
    );
  }
}

export default App;
