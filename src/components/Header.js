import React from 'react';
import styled from 'styled-components';


const AppHeader = styled.header`
  text-align: center;
  color: #420134;
`

const Header = () => {
  return (
    <AppHeader>
      <h1>Shopping list</h1>
    </AppHeader>
  );
}

export default Header;
