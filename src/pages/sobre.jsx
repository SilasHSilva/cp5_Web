import Menu from "../components/menu"
import { ContainerImg, Image, Paragrafo, Title } from "../styles/styles";

function Sobre() {
    return (
        <>
            <Menu />
            <hr />
            <ContainerImg>
            <Title>Sobre desenvolvedor desse site</Title>
            <Paragrafo>Meu nome é Silas, um jovem pardo de 23 anos de cabelos enrolados. Possuo diversos hobbies como jogar bola com meus amigos, sou um grande fã de musicas dos mais diversos gêneros e tenho paixão por instrumentos de cordas como violão, contra-baixo e guitarra. Gosto de conhecer diversos restaurantes e hamburguerias. Sou curioso e paciente, tenho interesse e tendencia a sempre resolver problemas seja ele dos mais simples ou mais sofisticados.</Paragrafo>
            <Image src="./Eu.jpg" alt=""/>
            </ContainerImg>
            
        </>
    )
}

export default Sobre;