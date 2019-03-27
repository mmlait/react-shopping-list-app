import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './Header';
import AddItem from './AddItem';
import Item from './Item';
import Footer from './Footer'


const AppWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
  @media (max-width: 700px) {
    width: 90%;
  }
`

const ListWrapper = styled.div`
  background-color: #A2A2A2;
  padding: 10px;
  border: 1px solid #420134;
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
