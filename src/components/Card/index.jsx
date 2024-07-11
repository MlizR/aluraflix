import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import ModalZoom from "../ModalZoom";

const CardContainer = styled.div`
  width: 430px;
  height: 320 px;
  border-radius: 10px;
  background-color: #000;
  border: solid 4px ${props => props.$bordercolor || '#6bd1ff'};

  @media (max-width: 767px){
    width: 350px;
    height: 295px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  align-items: center;
`;

const BotonCard = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
`;

const DivBoton = styled.div`
  display: flex;
  align-items: center;
`;

const Imagen = styled.div`
  position: relative;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 0 20px ${props => props.$shadowcolor || '#6bd1ff'}; /* Ajusta la sombra interna aquí */
    border-bottom: solid 4px ${props => props.$shadowcolor || '#6bd1ff'};;
    pointer-events: none; /* Asegura que no afecte la interacción con la imagen */
  }
`;

const Card = ({ video, $bordercolor, $shadowcolor}) => {
  const { isModalOpen, openModal, handleDelete, setEditVideo } = useContext(GlobalContext);

  const handleEditClick = () => {
    setEditVideo(video);
    openModal();
  };

  return (
    <CardContainer $bordercolor={$bordercolor}>
    <Imagen $shadowcolor={$shadowcolor}>
      <iframe
        width="100%"
        height="240"
        src={video.url}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </Imagen>

      
      <ButtonContainer>
        <DivBoton>
          <img src="./img/icons/borrar.png" alt="eliminar" />
          <BotonCard onClick={() => handleDelete(video.id)}>Borrar</BotonCard>
        </DivBoton>
        <DivBoton>
          <img src="./img/icons/editar.png" alt="editar" />
          <BotonCard onClick={handleEditClick}>Editar</BotonCard>
          {isModalOpen && <ModalZoom />}
        </DivBoton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
