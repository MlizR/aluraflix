import styled from "styled-components";

const DivText = styled.div`
    margin-top: 50px;
    font-size: 20px;

    label{
        display: block;
        margin-bottom: 15px;
        font-weight: 600;
    }
    textarea{
        width: 100%;
        height: 120px;
        border-radius: 15px;
        padding: 20px;
        background-color: transparent;
        /* Color del borde al seleccionar un campo */
        outline-color: #6BD1FF;
        color: #A5A5A5;
        font-weight: 600;
        box-sizing: border-box;
    }
`;
const TextArea = ({ titulo, placeholder, style, name, value, onChange}) => {
    return(
        <DivText>
            <label>{titulo}</label>
            <textarea
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                style={style}
            >
            </textarea>

        </DivText>
    )
}

export default TextArea;