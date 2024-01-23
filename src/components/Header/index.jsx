import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom'
import Toggle from '../Toggle/index'

function Header(){
  return(
    <div className='header-container'>
      <header>
        <div className='header-wrap'>
          <logo>Lucas Almeida Dev</logo>
            <div className='nav'>
                <div className='ul'>
                  <NavLink className="home" exact to="/" activeClassName="active">Home</NavLink>
                  <NavLink className="sobre" to="/sobre" activeClassName="active">Sobre</NavLink>
                  <NavLink className="tecnologias" to="/tecnologias" activeClassName="active">Tecnologias</NavLink>
                  <NavLink className="projetos" to="/projetos" activeClassName="active">Portifolio</NavLink> 
                </div>
                  <Toggle/>
            </div>
        </div>
      </header>
    </div>

  )
}

export default Header;