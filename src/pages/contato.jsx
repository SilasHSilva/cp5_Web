import { useState } from "react"
import  Menu  from "../components/menu"
import { InformacoesCep, TitlePage } from "../styles/styles"
import axios from "axios"


function Contato() {
    // vamos criar estados para armezenar o cep
    const [cep, setCep] = useState('');
    // estado para armazenar os dados retornados da nossa API ViaCep
    const [data, setData] = useState({});
    // Estado para manipular erro
    const [error, setError] = useState(null);

    function handleCepChange(e) {
        setCep(e.target.value)
    }
    
    function pesquisaCep() {
        //usar AXIOS: manipular o Get
        axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            // Define uma função Callback que será chamada se a requisição bem-sucedida
            .then(
                function (response) {
                    if (response.data && !response.data.erro) {
                        setData(response.data)
                        setError(null)
                    }
                    else {
                        setData({})
                        setError('CEP não encontrado')
                    }
                }
            )
            .catch(function (error) {
                setData({})
                setError('CEP não encontrado')
            })

    }
    return (
        <>
            <Menu />
            <TitlePage>Buscador de endereço pelo Cep</TitlePage>
            <input type="text" placeholder="Digite um cep" value={cep} onChange={handleCepChange}></input>
            <button onClick={pesquisaCep}>Pesquisar</button>
            {error && <p>{error}</p>}
            {data.cep && (
                <InformacoesCep>
                    <p>CEP: {data.cep}</p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Complemento: {data.complemento}</p>
                    <p>Bairro: {data.bairro}</p>
                    <p>UF: {data.uf}</p>
                    <p>DDD: {data.ddd}</p>
                </InformacoesCep>
            )
            }

        </>
    )
}

export default Contato;
