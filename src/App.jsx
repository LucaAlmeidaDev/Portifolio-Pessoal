import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        <Route path="/" element={
            <TransitionGroup>
              <CSSTransition
                key="home"
                timeout={300}
                classNames="fade"
              > 
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route path="/sobre" element={
            <TransitionGroup>
              <CSSTransition
                key="sobre"
                timeout={300}
                classNames="fade"
              >
                <Sobre />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route path="/tecnologias" element={
            <TransitionGroup>
              <CSSTransition
                key="tecnologias"
                timeout={300}
                classNames="fade"
              >
                <Tecnologias />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route path="/projetos" element={
            <TransitionGroup>
              <CSSTransition
                key="projetos"
                timeout={300}
                classNames="fade"
              >
                <Projetos />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
      
    </BrowserRouter>
  )
}
export default RoutesApp;
