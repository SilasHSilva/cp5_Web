import { link, menu} from "../styles/styles";

function Menu() {

    return (
        <>  
            <nav style={menu}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href="/" style={link}>HOME</a>  </li>
                    <li><a href="/sobre" style={link}>SOBRE</a>  </li>
                    <li><a href="contato"style={link} >CONTATO</a>  </li>
                    <li><a href="/veganismo"style={link} >O VEGANISMO</a>  </li>
                </ul>
            </nav>
        </>
    )

}
export default Menu;