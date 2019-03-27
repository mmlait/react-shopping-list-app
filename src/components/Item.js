import React, { PureComponent } from 'react';
import styled from 'styled-components';


const ItemRow = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px 0;
  background-color: #FEFFFC;
`

const ItemName = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`

const DeleteItemBtn = styled.button`
  cursor: pointer;
  color: #420134;
  font-weight: bold;
  border: 1px solid #420134;
  &:hover {
    background-color: #FD41D4;
  }
`

class Item extends PureComponent {
  render() {
    return(
      <ItemRow>
        <ItemName>
          {this.props.thing}
          <DeleteItemBtn onClick={ () => this.props.removeItem(this.props.id)}>X</DeleteItemBtn>
        </ItemName>
      </ItemRow>
    );
  }
}

export default Item;
