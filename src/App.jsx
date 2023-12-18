import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Tecnologias from './pages/Tecnologias';
import Projetos from './pages/Projetos';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/tecnologias" element={ <Tecnologias/> } />
        <Route path="/projetos" element={ <Projetos/> } />
      </Routes>
      
    </BrowserRouter>
  )
}
export default RoutesApp;
