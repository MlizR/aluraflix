import styled from "styled-components";

const Pie = styled.footer`
    background-color: black;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid 3px #2271D1;
    box-shadow: 0 0 15px #2271D1;
    // Determina que elemento se superpone a otro cuando sus areas se solapan
    // Los elementos con un z-index mas alto se dibuja por encima de los elementos con un z-index mas bajo 
    position: relative;
    z-index: 1;
`;
const Footer = () => {
 
    return(
        <Pie>
            <img src="./LogoMain.png" alt="LogoAluraflix" />
        </Pie>
    )
}

export default Footer;