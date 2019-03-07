import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: ${props => props.padding}em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  
`;



class Task extends Component {

render() {
  return (
      <div>
        <h1 >{this.props.taskName}</h1>
        <Button padding={this.props.index} primary={true} onClick={()=>{this.props.deleteTask(this.props.index)}} >Delete</Button>
    </div>
    )
  }
}

export default Task;
