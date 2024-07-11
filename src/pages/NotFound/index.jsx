import styled from "styled-components";

const ErrorSection = styled.section`
    text-align: center;
    padding: 30px;
    font-weight: bold;

    & h1 {
        font-size: 60px;
        margin-bottom: 10px;
    }

`;

const NotFound = () => {
    return(
        <ErrorSection>
            <h1>¡Oopps!</h1>
            <img src="./img/404.png" alt="error404" />
            <p>Parece que no podemos encontrar la página que estás buscando.</p>

        </ErrorSection>
    )
}

export default NotFound;