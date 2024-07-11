import styled from "styled-components";
import Card from "../Card";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Section = styled.section`
  margin: 30px;
  margin-top: 0;

  & h2 {
    text-transform: uppercase;
    color: white;
    width: 430px;
    border-radius: 10px;
    padding: 10px 0;
    text-align: center;
    margin: 0 0 30px 0;


  }

`;

const DivCategory = styled.div`
  @media (min-width: 767px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 286px;
    font-size: 12px;
  }
`;

const DiV = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
  -webkit-overflow-scrolling: touch;
  

  &::-webkit-scrollbar {
    /* Altura de la barra de desplazamiento horizontal */
    height: 12px;
    }

  &::-webkit-scrollbar-thumb {
    background: #2271D1; /* Color de la barra de desplazamiento */
    border-radius: 10px; /* Bordes redondeados */
  }

  &::-webkit-scrollbar-thumb:hover {
    /* Color de la barra de desplazamiento al pasar el ratón */
    background: #555; 
  }

  &::-webkit-scrollbar-track {
    background: #021d34; /* Color del fondo de la barra de desplazamiento */
    border-radius: 10px; /* Bordes redondeados */

  }

`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  scroll-snap-align: start;
  flex: 0 0 auto;
  margin-right: 16px; /* Espacio entre videos */
`;

const Categorias = () => {
  const { videos, categories } = useContext(GlobalContext);

  return (
    <>
      {categories.map((category) => (
        <Section key={category.id}>
          <DivCategory>
            <h2 style={{ backgroundColor: category.colorCategory }}>
              {category.nameCategory}
            </h2>
          </DivCategory>
          <DiV>
            {videos
              .filter((video) => video.category === category.nameCategory)
              .map((video) => (
                <VideoContainer key={video.id}>
                  <Card
                    video={video}
                    $bordercolor={category.colorCategory}
                    $shadowcolor={category.colorCategory}
                  />
                </VideoContainer>
              ))}
          </DiV>
        </Section>
      ))}
    </>
  );
};

export default Categorias;
