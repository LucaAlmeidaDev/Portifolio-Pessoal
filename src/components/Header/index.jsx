import React from 'react';
import { NavLink } from 'react-router-dom'

function Header(){
  return(
    <div className='w-full h-14 select-none text-black dark:text-white'>
      <header className='w-5/6 h-14 mx-auto'>
        <div className='flex items-center h-14'>
          <logo className='text-2xl'>Lucas Almeida Dev</logo>
            <nav className='gap-2 hidden ml-auto md:flex'>
                <ul className='m-auto gap-8 flex z-10'> 
                  <NavLink exact to="/" className='border-2 border-transparent border-solid hover:border-b-green-500'>Home</NavLink>
                  <NavLink to="/sobre" className='border-2 border-transparent border-solid hover:border-b-green-500'>Sobre</NavLink>
                  <NavLink to="/tecnologies" className='border-2 border-transparent border-solid hover:border-b-green-500'>Tecnologias</NavLink>
                  <NavLink to="/projects" className='border-2 border-transparent border-solid hover:border-b-green-500'>Projetos</NavLink>
                </ul>
       
            </nav>
        </div>
      </header>
     
    </div>

  )
}

export default Header;