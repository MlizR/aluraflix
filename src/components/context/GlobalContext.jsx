import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor del contexto
// Definir el componente para compartir las cosas
const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [ categories, setCategories ] = useState([
    {
        id: uuid(),
        nameCategory: "Front End",
        colorCategory: "#6BD1FF"
    },
    {
        id: uuid(),
        nameCategory: "Back End",
        colorCategory: "#00C86F"
    },
    {
        id: uuid(),
        nameCategory: "Innovación y gestión",
        colorCategory: "#FFBA05"
    }
  ]);

  const [editVideo, setEditVideo] = useState(null);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditVideo(null);
  };


  useEffect(() => {
    const getData = async () => {
        const response = await fetch("https://my-json-server.typicode.com/MlizR/api-aluraflix/videos");
        const data = await response.json();
        setVideos(data);
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    setVideos((videos) => videos.filter((video) => video.id !== id));
  };

  const addVideo = (newVideo) => {
    // Spread operator(...valoresActuales, ): Se crea una copia de los valores actuales y despues se le agrega el video
    setVideos((currentVideos) => [...currentVideos, newVideo]);
  };

  const handleEdit = (updateVideo) => {
    setVideos((videos) => 
      videos.map((video) => (video.id === updateVideo.id ? updateVideo : video))

    );
    closeModal();
  }

  

  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        videos,
        categories,
        setCategories,
        handleDelete,
        addVideo,
        editVideo,
        setEditVideo,
        handleEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
