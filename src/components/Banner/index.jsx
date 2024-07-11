import styled from "styled-components";

const Divbanner = styled.div`
    background-image:url("./img/banner.jpg");
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    // Determina que elemento se superpone a otro cuando sus areas se solapan
    // Los elementos con un z-index mas alto se dibuja por encima de los elementos con un z-index mas bajo 
    position: relative;
    

    @media (min-width: 767px) and (max-width: 1023px) { 
        height: 450px;
    }

`;

const Divcard = styled.div`
    text-align: justify;
    padding: 20px;
    color: white;

    & img{
        width: 600px;
        height: 300px;
        border-radius: 10px;
        border: solid 2px #2271D1;
        box-shadow: inset 0 0 10px ;
    }

    p {
        font-size: 46px;
        margin: 30px 0 10px 0;
        font-weight: 400;
    }
    span{
        font-size: 18px;
    }


    @media (min-width: 767px) and (max-width: 1023px) { 
        
        & img {
            width: 350px;
            height: auto;

        }

        p {
            font-size: 32px;
        }
    }
`;

const Categoria = styled.h1`
    background-color: #6BD1FF;
    width: 290px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 48px;
    text-align: center;

    @media (min-width: 767px) and (max-width: 1023px) {
        font-size: 32px;
        width: 280px;
    }
`;

const Banner = () => {
    return (
        <Divbanner> 
            <Divcard>
                <Categoria>Front End</Categoria>
                <p>Challenge React</p>
                <span>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</span>
            </Divcard>
            <Divcard>
                <img src="./img/video.jpg" alt="Video" />
            </Divcard>
            

        </Divbanner>
    )
}

export default Banner;