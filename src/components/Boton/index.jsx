import styled, { css } from "styled-components";

const Boton = styled.button`
  width: 180px;
  color: white;
  padding: 10px 0;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  // css es una función importada de styled-components que se utiliza para escribir bloques de estilos CSS.
  // Permite anidar estilos dentro de otros estilos o aplicar estilos condicionales.

  ${props => props.$active && css`
    background-color: black;
    color: #2271d1;
    border: solid 2px #2271d1;
    box-shadow: inset 0 0 10px;
  `}


  @media (min-width: 767px) and (max-width: 1023px) {
    margin-bottom: 15px;
  }

`;

export default Boton;
