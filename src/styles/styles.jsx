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
    corFundo:'white',
    corTexto:'maroon',
    corTitulo:'red'
}

export const darkTheme = {
    corFundo:'#000000',
    corTexto:'white',
    corTitulo:'#fffdd0'
}

export const Container = styled.div`
    background-color: ${props=>props.theme.corFundo};
    color: ${props=>props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: White;
    margin: 10px;

`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`

export const TitlePage = styled.h1 `
    color: ${props=>props.theme.corTitulo};
    font-size: 20px;
`

export const InformacoesCep = styled.div`
    margin:20px;
    padding:10px;
    display:flex;
    flex-direction:column;
`