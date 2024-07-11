import styled from "styled-components";
import Boton from "../Boton";
import BotonIcon from "../BotonIcon";
import Campo from "../Formulario/Campo";
import ListaCategorias from "../Formulario/ListaCategorias";
import TextArea from "../Formulario/TextArea";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Overlay = styled.div`
  // La opacidad va del 0 - 1 y el rgb va de 0-255
  background-color: rgba(3, 18, 47, 0.2);
  // La capa se mantenga fija incluso cuando la página se desplaza.
  position: fixed;
  // El elemento se va a expandir al alto y ancho del contenedor
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  z-index: 11;
  color: white;
  top: 150px;
  background-color: #03122f;
  padding: 40px;
  border: 4px solid #6bd1ff;
  width: 970px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 20px;
  align-items: center;

  h1 {
    color: #2271d1;
    font-size: 60px;
  }

  form {
    width: 575px;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    width: 600px;
    
  }

  @media (max-width: 767px){ 
    width: 350px;

    h1 {
      font-size: 32px;
    }
    form {
    width: 350px;
  }
  }
`;

const DivBoton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 40px;

`;

const ModalZoom = () => {
  const { closeModal, editVideo, handleEdit, categories } = useContext(GlobalContext);
  const [formValues, setFormValues] = useState({
    title: "",
    url: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if(editVideo) {
      setFormValues({
        title: editVideo.title,
        url: editVideo.url,
        description: editVideo.description,
        category: editVideo.category
      });
    }
  }, [editVideo]);

  const validate = () => {
    const errors = {};
    if (!formValues.title) errors.title = "El título es requerido";
    if (!formValues.url) errors.url = "El enlace del video es requerido";
    if (!formValues.description) errors.description = "La descripción es requerida";
    if (!formValues.category) errors.category = "La categoría es requerida";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      return;
    }

    handleEdit({ ...editVideo, ...formValues});
  };

  const handleReset = () => {
    setFormValues({
      title: "",
      url: "",
      description: "",
      category: "",
    });
    setErrors({});
  };


  return (
    <>
      <Overlay onClick={closeModal} />
      <DialogEstilizado>
        <BotonIcon onClick={closeModal}>
          <img src="./img/icons/cerrar.png" alt="" />
        </BotonIcon>
        <h1>EDITAR CARD:</h1>
        <form onSubmit={handleSubmit}>
          <Campo
            style={{ border: "3px solid #6bd1ff" }}
            titulo="Título"
            placeholder="Ingrese el título"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
          <ListaCategorias style={{ border: "3px solid #6bd1ff" }}
          name="category"
          value={formValues.category}
          onChange={handleChange} />
          
          {errors.category && <span className="error">{errors.category}</span>}

          <Campo
            style={{ border: "3px solid #6bd1ff" }}
            titulo="Video"
            placeholder="Ingrese el enlace del video"
            name="url"
            value={formValues.url}
            onChange={handleChange}
            required
            type="url"
          />
          {errors.url && <span className="error">{errors.url}</span>}
          <TextArea
            style={{ border: "3px solid #6bd1ff" }}
            titulo="Descripción"
            placeholder="¿De qué se trata el video?"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            required
          />
          {errors.description && <span className="error">{errors.description}</span>}

          <DivBoton>
            <Boton $active>Guardar</Boton>
            <Boton type="reset" onClick={() => handleReset()}>
              Limpiar
            </Boton>
          </DivBoton>
        </form>
      </DialogEstilizado>
    </>
  );
};

export default ModalZoom;
