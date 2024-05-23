import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.jsx';

import Home from './pages/Home/index.jsx';
import Sobre from './pages/Sobre/index.jsx';
import Tecnologies from './pages/Tecnologies/index.jsx'
import Projects from './pages/Project/index.jsx'


function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/sobre' element={ <Sobre/> }/>
        <Route path='/tecnologies' element={ <Tecnologies/>}/>
        <Route path='/projects' element={ <Projects/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;