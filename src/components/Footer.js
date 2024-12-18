import styled from "styled-components/macro";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div>이동규, Web Developer</div>
      <div>nninnnin7@gmail.com</div>
    </Container>
  );
};

const Container = styled.footer`
  padding-bottom: 2em;
  padding-right: 2em;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  font-weight: 500;

  scroll-snap-align: end;

  @media screen and (max-width: 480px) {
    height: 100svh;
  }

  & > div {
    margin-bottom: 0.5em;
  }
`;

const Contact = styled.div`
  font-weight: 500;

  display: flex;
  flex-direction: column;
  place-self: center right;
  align-items: flex-end;

  span {
    margin-right: 2mm;
    padding: 1mm;

    label {
      min-width: 300px;
    }
  }
`;

export default Footer;
