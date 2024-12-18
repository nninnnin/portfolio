import styled from "styled-components/macro";
import GlobalStyle from "./GlobalStyle";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const isMobile = window.innerWidth <= 480;

  return (
    <>
      <GlobalStyle />
      <Container>
        {!isMobile && <Header>프로젝트</Header>}

        <Resume />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: white;

  max-width: 240mm;
  min-height: 100vh;

  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    height: 100svh;
    overflow: auto;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (min-width: 481px) {
  }
`;

export default App;
