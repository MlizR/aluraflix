import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const DivLista = styled.div`
   margin-top: 50px;
    font-size: 20px;

    label{
        display: block;
        margin-bottom: 15px;
        font-weight: 600;
    }

    select{
        width: 100%;
        border-radius: 15px;
        padding: 20px;
        background-color: transparent;
        /* Color del borde al seleccionar un campo */
        outline-color: #6BD1FF;
        color: #A5A5A5;
        font-weight: 600;
       
    }
`;
const ListaCategorias = ({style, name, value, onChange}) => {

    const { categories } = useContext(GlobalContext);

    return(
        <DivLista>
            <label>Categoría</label>
            <select 
                style={style}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled defaultValue="" hidden >Seleccionar categoría</option>
         
                {categories.map(
                    ({id, nameCategory}) => {
                    
                    return(
                    <option key={id} value={nameCategory}>
                        {nameCategory}
                    </option>
                )
                    
                })}
            </select>
            
        </DivLista>
    )
}

export default ListaCategorias;