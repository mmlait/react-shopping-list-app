import React, { PureComponent } from 'react';
import styled from 'styled-components';

import colors from '../colors';
import Count from './ItemCounter';


const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.listBackground};
  padding: 10px;
  border-bottom: 1px solid white;
  &:last-of-type {
    margin-bottom: 10px;
  }
`

const ItemName = styled.div`
  width: 70%;
  max-width: 400px;
  word-break: break-word;
`

const AddAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
  padding-left: 10px;
  @media (max-width: 700px) {
    width: 25%;
  }
`

const DeleteItemBtn = styled.button`
  background-color: ${colors.button};
  color: #a8a8a8;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverBg};
    color: ${colors.buttonHoverText};
  }
  &:focus {
    outline: none;
  }
`

class Item extends PureComponent {
  render() {
    return(
      <ItemRow>
        <ItemName>
          {this.props.thing}
        </ItemName>

        <AddAndDelete>
          <Count />
          <DeleteItemBtn onClick={ () => this.props.removeItem(this.props.id)}>x</DeleteItemBtn>
        </AddAndDelete>
      </ItemRow>
    );
  }
}

export default Item;
