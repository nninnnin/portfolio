import styled from "styled-components/macro";
import React from "react";

const Header = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.h1`
  letter-spacing: 9px;
  font-weight: 600;

  padding: 1em;
  scroll-snap-align: start;

  @media only screen and (max-width: 480px) {
    padding-left: 0;
  }
`;

export default Header;
