import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Boton from "../Boton";
import { useMediaQuery } from "react-responsive";

const CabeceraContainer = styled.section`
  background-color: black;
  height: 80px;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: solid 3px #2271d1;
  box-shadow: 0 0 15px #2271d1;
  // Determina que elemento se superpone a otro cuando sus areas se solapan
  // Los elementos con un z-index mas alto se dibuja por encima de los elementos con un z-index mas bajo
  position: relative;
  z-index: 1;

  div{
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }
  

  @media (max-width: 767px){
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
   }
`;
const Cabecera = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <CabeceraContainer>
      {mobile ? (
        <>
          <div>
            <Link to="/">
              <Boton
                $active={activeButton === "home"}
                onClick={() => handleButtonClick("home")}
              >
                Home
              </Boton>
            </Link>

            <Link to="./nuevo-video">
              <Boton
                $active={activeButton === "nuevo-video"}
                onClick={() =>{ 
                  handleButtonClick("nuevo-video")
                  
                }
                }
              >
                Nuevo video
              </Boton>
            </Link>
          </div>
        </>
      ) : (
        <>
          <img src="./LogoMain.png" alt="Logo Aluraflix" />
          <div>
            <Link to="/">
              <Boton
                $active={activeButton === "home"}
                onClick={() => handleButtonClick("home")}
              >
                Home
              </Boton>
            </Link>

            <Link to="./nuevo-video">
              <Boton
                $active={activeButton === "nuevo-video"}
                onClick={() => handleButtonClick("nuevo-video")}
              >
                Nuevo video
              </Boton>
            </Link>
          </div>
        </>
      )}
    </CabeceraContainer>
  );
};

export default Cabecera;
