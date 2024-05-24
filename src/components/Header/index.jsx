import React from 'react';
import Code from 'remixicon-react/CodeBoxFillIcon'
import { NavLink } from 'react-router-dom'  
import HomeIcon from 'remixicon-react/Home2FillIcon'
import Profile from 'remixicon-react/ProfileFillIcon'
import Folder from 'remixicon-react/Folder5FillIcon'
import Terminal from 'remixicon-react/CodeBoxLineIcon'

function Header() {
  return (
    <div className='w-full h-14 select-none bg-black text-white dark:bg-slate'>
      <header className='md:w-5/6 h-14 mx-auto'>
        <div className='flex items-center h-14 justify-between'>
          <logo className='text-2xl md:flex gap-1 hidden'><Code size={30} color='#22c55e' />Lucas Almeida Dev</logo>
          <nav className='gap-2 hidden ml-auto md:flex'>
            <ul className='m-auto gap-8 flex z-10'>
              <NavLink exact to="/" className='border-2 border-transparent border-solid hover:border-b-green-500'>Home</NavLink>
              <NavLink to="/sobre" className='border-2 border-transparent border-solid hover:border-b-green-500'>Sobre</NavLink>
              <NavLink to="/tecnologies" className='border-2 border-transparent border-solid hover:border-b-green-500'>Tecnologias</NavLink>
              <NavLink to="/projects" className='border-2 border-transparent border-solid hover:border-b-green-500'>Projetos</NavLink>
            </ul>

          </nav>
          <div>
            <details className="w-full absolute flex md:hidden h-8 bg-black open:w-full z-10" open>
            <summary class="text-xl ml-5 dark:text-white font-semibold select-none ">
              Menu
            </summary>
            <div className='flex flex-col'>
              <NavLink exact to="/" className='flex gap-1 w-full h-12 bg-black z-10 bg-opacity-80 items-center border border-solid border-emerald-900'><HomeIcon className='ml-4' color='#22c55e'/>Home</NavLink>
              <NavLink to="/sobre" className='flex gap-1 w-full h-12 bg-black z-10 bg-opacity-80 items-center border border-solid border-emerald-900'><Profile className='ml-4' color='#22c55e'/>Sobre</NavLink>
              <NavLink to="/tecnologies" className='flex gap-1 w-full h-12 bg-black bg-opacity-80 z-10 items-center border border-solid border-emerald-900'><Terminal className='ml-4' color='#22c55e'/>Tecnologias</NavLink>
              <NavLink to="/projects" className='flex gap-1 w-full h-12 bg-black z-10 bg-opacity-80 items-center border border-solid border-emerald-900'><Folder className='ml-4' color='#22c55e'/>Projetos</NavLink>
            </div>
            </details>  
          </div>
        </div>
      </header>

    </div>

  )
}

export default Header;