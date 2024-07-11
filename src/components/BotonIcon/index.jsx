import styled from "styled-components";

const BotonIcon = styled.button`
  position: relative;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  bottom: 10px;
  left: 450px;
  cursor: pointer;


  @media (min-width: 767px) and (max-width: 1023px) {
    left: 270px;
  }

  @media (max-width: 767px) {
    bottom: 30px;
    left: 170px;
  }
`;

export default BotonIcon;