import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import colors from '../colors';
import Header from './Header';
import AddItem from './AddItem';
import Item from './Item';
import Footer from './Footer'


export const GlobalStyle = createGlobalStyle`
  html, body, #root {
     background-color: #EFDCEB;
     margin: 0;
     padding: 0;
     height: 100%;
     font-family: "Segoe UI", Candara, "Trebuchet MS", serif;
  }
`

const AppWrapper = styled.div`
  width: 50%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
  @media (max-width: 700px) {
    width: 90%;
  }
`

const ListWrapper = styled.div`
  background-color: ${colors.listBackground};
  color: ${colors.textColor};
  padding: 10px;
  border-radius: 10px;
`

class App extends Component {

  state = {
    listOfItems: []
  }

  prevItemId = 0;

  handleAdding = (thing) => {
    this.setState( prevState => {
      return {
        listOfItems: [
          ...prevState.listOfItems,
          {
            item: thing,
            id: this.prevItemId += 1,
          }
        ]
      };
    });
  }

  removeItem = (id) => {
    this.setState( prevState => {
      return {
        // return a new listOfItems array, without removed item
        listOfItems: prevState.listOfItems.filter( i => i.id !== id )
      }
    });
  }

  render() {
    return (
      <AppWrapper>
      <GlobalStyle />
        <Header />

          <ListWrapper>
          <AddItem addItems={this.handleAdding}/>

          {this.state.listOfItems.map( item =>
            <Item
              thing={item.item}
              id={item.id}
              key={item.id.toString()}
              removeItem={this.removeItem}
            />
          )}
          </ListWrapper>

        <Footer />

      </AppWrapper>
    );
  }
}

export default App;
