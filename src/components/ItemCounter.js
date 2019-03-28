import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../colors';


const LessItemsBtn = styled.button`
  background-color: ${colors.button};
  color: ${colors.textColor};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
  &:focus {
    outline: none;
  }
`

const MoreItemsBtn = styled.button`
  background-color: ${colors.button};
  color: ${colors.textColor};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
  &:focus {
    outline: none;
  }
`

const NumberOfItems = styled.span`
  padding: 0 5px;
`

class Count extends Component {

  state = {
    numberOfItems: 1
  }

  lessItems = () => {
    this.setState( prevState => {
      return {
        numberOfItems: prevState.numberOfItems - 1
      }
    });
  }

  moreItems = () => {
    this.setState( prevState => {
      return {
        numberOfItems: prevState.numberOfItems + 1
      }
    });
  }

  render() {
    return (
      <div>
        <LessItemsBtn onClick={this.lessItems}> - </LessItemsBtn>
        <NumberOfItems>{ this.state.numberOfItems }</NumberOfItems>
        <MoreItemsBtn onClick={this.moreItems}> + </MoreItemsBtn>
      </div>
    )
  }
}

export default Count;
