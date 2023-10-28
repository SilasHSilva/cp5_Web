import { darkTheme, lightTheme } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Veganismo from "./pages/veganismo";
import { Container, Button} from "./styles/styles";

function App() {
  const[theme,setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <hr/>
      <Container>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/veganismo' element={<Veganismo />} />
        </Routes>
      </BrowserRouter>
      </Container>
      <Button onClick={mudarTheme}><img src="./lampada.png" alt="" width={20} height={20} /></Button>
      </ThemeProvider>
      </>
  );
}

export default App;
