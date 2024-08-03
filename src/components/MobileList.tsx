import styled from "styled-components";
import React from "react";

const MobileList = () => {
  return (
    <Container>
      <h1>작업물 열람</h1>

      <Notice>스크롤을 내려주세요</Notice>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100svh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Notice = styled.div`
  font-size: 1em;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: blink 5s infinite ease-in-out;

  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

export default MobileList;
