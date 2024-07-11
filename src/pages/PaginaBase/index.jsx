import { Outlet } from "react-router-dom";
import Cabecera from "../../components/Cabecera";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GlobalStyles from "../../components/GlobalStyles";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Fondo = styled.div`
  background-color: #262626;
  min-height: 100vh;

  @media (max-width: 767px){ 
    background-color: #191919;
    padding-top: 30px;
    padding-bottom: 100px;
  }
`;
const PaginaBase = () => {
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <main>
      <Fondo>
        <GlobalStyles />
        {mobile ? (
          <>
            <Container>
              <Outlet />
            </Container>
            <Cabecera />
          </>
        ) : (
          <>
            <Cabecera />
            <Container>
              <Outlet />
            </Container>
            <Footer />
          </>
        )}
      </Fondo>
    </main>
  );
};

export default PaginaBase;
