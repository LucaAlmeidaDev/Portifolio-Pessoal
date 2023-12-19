import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import Toggle from '../Toggle/index'
function Header(){
  return(
    <header>
          <logo>Lucas Almeida Dev</logo>
        <div className='nav'>
            <div className='ul'>
              <Link className="home" to="/">Home</Link>
              <Link className="sobre" to="/sobre">Sobre</Link>
              <Link className="tecnologias" to="/tecnologias">Tecnologias</Link>
              <Link className="projetos" to="/projetos">Projetos</Link> 
            </div>
        </div>
          <Toggle/>
    </header>
    
  )
}

export default Header;