import styled from "styled-components";

export const menu = {
    background: 'green',
    display: 'flex',
    justifyContent: 'center'
}
export const link = {
    display: 'inlineBlock',
    textDecoration: 'none',
    padding: '20px',
    color: '#fff',
    fontSize: '15px'
}

export const lightTheme = {
    corFundo: 'white',
    corTexto: 'dark',
    corTitulo: 'darkgreen'
}

export const darkTheme = {
    corFundo: '#201f1e',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: White;
    margin: 10px;

`

export const Title = styled.h1`
  font-size: 3.9em;
  text-align: center;
  color: #BF4F74;
`

export const TitlePage = styled.h1`
    color: ${props => props.theme.corTitulo};
    font-size: 20px;
`

export const InformacoesCep = styled.div`
    margin:20px;
    padding:10px;
    display:flex;
    flex-direction:column;
`

export const Image = styled.img`
    width: 1000px; /* Defina a largura desejada */
    height: 700px; /* Defina a altura desejada */
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente os itens */
  gap: 10px; /* Define um espaçamento horizontal entre a imagem e o título */
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 1500px; /* Defina o tamanho da imagem */
`;

export const ImageVegan = styled.img`
  width: 1600px;
  height: 700px;
`;

export const TextOverlay = styled.h1`
  position: absolute;
  top: 12%; /* Centraliza verticalmente o texto */
  left: 20%; /* Centraliza horizontalmente o texto */
  transform: translate(-50%, -50%); /* Move o texto de volta para o centro */
  background-color: rgba(0, 0, 0, 0.7); /* Define um fundo semi-transparente para o texto */
  color: white; /* Define a cor do texto */
  padding: 80px; /* Adicione algum espaçamento ao redor do texto */
  font-family: 'Helvetica Neue','Sans-serif'
`;

export const ImageVegan2 = styled.img`
  width: 1600px;
  height: 700px;
`;

export const ContainerImgVegan = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente os itens */
  gap: 10px; /* Define um espaçamento horizontal entre a imagem e o título */
`;

export const Paragrafo = styled.p`
    color: darkgrey;
    font-size: 1.1em;
    text-align: left;
    margin: 20px;
`