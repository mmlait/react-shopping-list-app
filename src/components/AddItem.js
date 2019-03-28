import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../colors';


const AddItemForm = styled.form`
  display: flex;
  margin: 10px;
`

const AddItemInput = styled.input`
  flex-grow: 1;
  background-color: #FFFFFF;
  padding: 10px;
  font-family: "Segoe UI", Candara, "Trebuchet MS", serif;
  font-size: 1rem;
  text-shadow: none;
  border: none;
  &:focus {
    outline: none;
  }
`

const AddItemBtn = styled.button`
  display: block;
  background-color: ${colors.button};
  color: ${colors.textColor};
  padding: 10px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
`

class AddItem extends Component {

  userInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // check that input value is not empty
    if (this.userInput.current.value.trim() !== "") {
        this.props.addItems(this.userInput.current.value);
    }
    e.currentTarget.reset();
  }

  render() {
    return (
      <AddItemForm onSubmit={this.handleSubmit}>
        <AddItemInput
          type="text"
          ref={this.userInput}
          placeholder="Add item"
        />

        <AddItemBtn type="submit">Add item</AddItemBtn>
      </AddItemForm>
    );
  }
}

export default AddItem;
