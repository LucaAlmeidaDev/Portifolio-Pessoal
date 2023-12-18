import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <Link className="logo" to="/">Home</Link>
      <Link className="favoritos" to="/sobre">Sobre</Link>
      <Link className="favoritos" to="/tecnologias">Tecnologias</Link>
      <Link className="favoritos" to="/projetos">Projetos</Link>
    </header>
  )
}

export default Header;