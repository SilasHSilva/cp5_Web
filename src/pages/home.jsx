import Menu from '../components/menu'
import { Image, Title, ContainerImg } from '../styles/styles';

function Home() {
    return (
        <>
            <Menu />
            <ContainerImg>
                <Title>Este site tem por função mostrar resumidamente o que significa o veganismo</Title>
                <Image src='./frutas.jpg' alt='' />
            </ContainerImg>
        </>
    )
}
export default Home;