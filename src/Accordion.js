import React, {Component} from 'react';
import './Accordion.css';
import {Motion, spring} from 'react-motion';

var accordionContainerStyle = {
  overflow:'hidden',
  height:'0px'
};

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

const Aux = (props) => props.children

export default class Carrossel extends Component{
  constructor(props){
    super(props);
  }

  state = {isOpen:false}

  onToggle = (e) => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    let containerHeight;
    if (this.containerNode){
      containerHeight = this.containerNode.scrollHeight;
    }

    let {isOpen} = this.state;
    const config = { stiffness: 120, damping: 20 };
    const toCSS = (height) => {
      return { height: `${height}px` };
    }
    return(
      <Aux>
        <div onClick={this.onToggle} style={HeaderContainerStyle}>
          <div style={titleStyle}>
            <p>Esse é o título do accordion</p>
          </div>
        </div>
        <Motion 
          defaultStyle={{ height: 0 }} 
          style={{ height: spring(isOpen ? containerHeight: 0, config) }}
        >
          { 
            (value) => {
              return(
                <div ref={node => this.containerNode = node} style={{...accordionContainerStyle, ...toCSS(value.height)}}>
                  {this.props.renderContent()}
                </div>
              )
            }
          }
        </Motion>  
      </Aux>
    )
  }
}