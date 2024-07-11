import { useContext, useState } from "react";
import "./NuevoVideo.css";
import TextArea from "./TextArea";
import { GlobalContext } from "../context/GlobalContext";
import Campo from "./Campo";
import ListaCategorias from "./ListaCategorias";
import Boton from "../Boton";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Formulario = () => {
  const { addVideo, categories } =
    useContext(GlobalContext);

  // Redirigir después de agregar el video
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [formValues, setFormValues] = useState({
    title: "",
    url: "",
    description: "",
    category: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


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
    }else {
      alert("Registro exitoso");
    }

    const newVideo = {
      ...formValues,
      // Se asigna un ID al nuevo video
      id: uuid(),
    };
    addVideo(newVideo);

    console.log(newVideo);

    // Redirige a la página principal
    navigate("/");
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


  const mobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    
    <section className="section__nuevo">
      <div className="container__title">
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>

      <div className="form__container">
        <p>Crear Tarjeta</p>
        <form className="form__nuevo" onSubmit={handleSubmit}>
          {mobile ? (
            <>
              <div className="form__group">
                <Campo
                  style={{ border: "3px solid #262626" }}
                  titulo="Título"
                  placeholder="Ingrese el título"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />

                {errors.title && <span className="error">{errors.title}</span>}
                 

                <ListaCategorias
                  style={{ border: "3px solid #262626" }}
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  error={errors.category}
                />
                {errors.title && <span className="error">{errors.title}</span>}



                <Campo
                  style={{ border: "3px solid #262626" }}
                  titulo="Video"
                  placeholder="Ingrese el enlace del video"
                  type="url"
                  name="url"
                  value={formValues.url}
                  onChange={handleChange}
                />
                {errors.url && <span className="error">{errors.url}</span>}

                <TextArea
                  style={{ border: "3px solid #262626" }}
                  titulo="Descripción"
                  placeholder="¿De qué se trata el video?"
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                />
                {errors.description && <span className="error">{errors.description}</span>}

                <div className="button__group">
                  <Boton $active type="submit">
                    Guardar
                  </Boton>
                  <Boton
                    type="reset"
                    onClick={handleReset}
                  >
                    Limpiar
                  </Boton>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form__group">
                <Campo
                  style={{ border: "3px solid #262626" }}
                  titulo="Título"
                  placeholder="Ingrese el título"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />

                {errors.title && <span className="error">{errors.title}</span>}

                <Campo
                  style={{ border: "3px solid #262626" }}
                  titulo="Video"
                  placeholder="Ingrese el enlace del video"
                  type="url"
                  name="url"
                  value={formValues.url}
                  onChange={handleChange}
                />
                {errors.url && <span className="error">{errors.url}</span>}

                <div className="button__group">
                  <Boton $active type="submit">
                    Guardar
                  </Boton>
                  <Boton
                    type="reset"
                    onClick={handleReset}
                  >
                    Limpiar
                  </Boton>
                </div>
              </div>

              <div className="form__group">
                <ListaCategorias
                  style={{ border: "3px solid #262626" }}
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                />
                {errors.category && <span className="error">{errors.category}</span>}

                <TextArea
                  style={{ border: "3px solid #262626" }}
                  titulo="Descripción"
                  placeholder="¿De qué se trata el video?"
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                />

                {errors.description && <span className="error">{errors.description}</span>} 
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Formulario;
