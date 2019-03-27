import React from 'react';
import styled from 'styled-components';


const AppFooter = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
`

const Footer = () => {
  return (
    <AppFooter>
      <span>&copy;2019 Miia Laitinen</span>
    </AppFooter>
  );
}

export default Footer;
