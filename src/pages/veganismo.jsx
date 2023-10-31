import Menu from "../components/menu"
import { ImageVegan, ImageContainer, TextOverlay, ContainerImgVegan, ImageVegan2, Paragrafo } from "../styles/styles";

function Veganismo() {
    return (
        <>
            <Menu />
            <ImageContainer>
                <ImageVegan src="./img2Vegan.jpg" alt="" />
                <TextOverlay>O que é o veganismo?</TextOverlay>
            </ImageContainer>
            <ContainerImgVegan>
                <Paragrafo>O veganismo é uma filosofia de vida que promove o respeito pelos animais, buscando beneficiar as pessoas, os animais e o meio ambiente. Na prática, os veganos evitam o uso de produtos de origem animal, o que inclui: <br /> <br />

                    Não consumir carne de qualquer tipo, bem como qualquer alimento que contenha ingredientes de origem animal, como leite, queijo, ovos, mel, e outros produtos similares. <br /><br />
                    Evitar o uso de roupas e calçados feitos a partir de partes de animais, como couro, lã e seda. <br /> <br />
                    Não apoiar produtos de beleza e medicamentos testados em animais ou que contenham ingredientes de origem animal em sua composição. <br /> <br />
                    Abster-se de participar de entretenimento que envolva exploração animal, como rodeios, circos com animais, rinhas de galo, entre outros. <br /> <br />
                    No âmbito profissional, não se envolver em atividades que explorem animais, como a venda de animais em pet shops, a comercialização de produtos de origem animal, ou a operação de restaurantes que sirvam carne ou outros produtos de origem animal. <br />
                    Os veganos vivem suas vidas de maneira semelhante às outras pessoas, com a distinção de que fazem escolhas baseadas no respeito aos animais em todas as áreas de suas vidas. <br /><br />

                    A palavra "vegan" é de origem inglesa e é pronunciada como "vígan," sendo aportuguesada como "vegano" para se referir a quem pratica o veganismo.</Paragrafo>
                <ImageVegan2 src='./img1Vegan.jpg' alt='' />
            </ContainerImgVegan>
        </>
    )
}

export default Veganismo;