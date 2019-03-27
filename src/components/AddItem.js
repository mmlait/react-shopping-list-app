import React, { Component } from 'react';
import styled from 'styled-components';


const AddItemForm = styled.form`
  display: flex;
`

const AddItemInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  background-color: #FFFFFF;
  border: none;
  text-shadow: none;
  font-size: 1rem;
  font-family: "Segoe UI", Candara, "Trebuchet MS", serif;
  &:focus {
    outline: none;
    border: 1px solid #420134;
  }
`

const AddItemBtn = styled.button`
  display: block;
  background-color: #420134;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #FD41D4;
  }
`

class AddItem extends Component {

  userInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // check that input value is not only space
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
