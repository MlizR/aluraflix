import styled from "styled-components";

const DivCampo = styled.div`
    margin-top: 50px;
    font-size: 20px;

    label {
        display: block;
        margin-bottom: 15px;
        font-weight: 600;
    }

    input{
        width: 100%;
        border-radius: 15px;
        padding: 20px;
        background-color: transparent;
        /* Color del borde al seleccionar un campo */
        outline-color: #6BD1FF;
        color: #A5A5A5;
        font-weight: 600;
        /*Ocupa realmnete el 100% del ancho incluyendo las propiedades margin o padding*/
        box-sizing: border-box;
    }

`;

const Error = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;

`;

const Campo = ({ titulo, placeholder, type = "text", value, onChange, style, name}) => {

    // En caso de que type sea indefinido le podemos dar un valor por defecto

   {/*console.log(type); */} 
    return(
        <DivCampo>
            <label>{titulo}</label>
            <input
                type={type}
                placeholder={placeholder}
                style={style}
                value={value}
                onChange={onChange}
                name={name}

            />
        </DivCampo>
        
    )
}

export default Campo