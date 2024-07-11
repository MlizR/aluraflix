import { useContext } from "react";
import Banner from "../../components/Banner";
import Categorias from "../../components/Categorias";
import ModalZoom from "../../components/ModalZoom";
import { GlobalContext } from "../../components/context/GlobalContext";
import { useMediaQuery } from "react-responsive";

const Inicio = () => {

  const { videos } = useContext(GlobalContext);

  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
    {mobile ? (
      <Categorias videos={videos} />
    ) : (
      <>
      <Banner />
      <Categorias videos={videos} />
      </>
    )}   
    </>
  );
};

export default Inicio;
