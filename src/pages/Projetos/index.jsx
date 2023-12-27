import './projetos.css';
import img from '../../assets/img.jpg'
import ExportLink from 'remixicon-react/ExternalLinkFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'


function Projetos(){
    return(
        <div className='container'>
    <div className='wrap'>
                <div className='header'>
                    <h1>Projetos recentes</h1>
                    <span class="blur"></span>
                    <h2>Meu Portifolio</h2>
                </div>
            
                <div className='projetos-container'>    
                    <div className='projeto'>
                        <div className='projeto-img'>
                            <img src={img}/>
                        </div>
                        <div className='projeto-text'>
                            <h1>Teste</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, cupiditate unde natus soluta, optio blanditiis hic possimus consectetur aperiam </p>
                            <a href='#' target='_blank'>Visitar site <ExportLink size={16}/></a>
                        </div>
                    </div>
                    <div className='projeto'>
                        <div className='projeto-img'>
                            <img src={img}/>
                        </div>
                        <div className='projeto-text'>
                            <h1>Teste</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, cupiditate unde natus soluta, optio blanditiis hic possimus consectetur aperiam </p>
                            <a href='#' target='_blank'>Visitar site <ExportLink size={16}/></a>
                        </div>
                    </div>
                    <div className='projeto'>
                        <div className='projeto-img'>
                            <img src={img}/>
                        </div>
                        <div className='projeto-text'>
                            <h1>Teste</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, cupiditate unde natus soluta, optio blanditiis hic possimus consectetur aperiam </p>
                            <a href='#' target='_blank'>Visitar site <ExportLink size={16}/></a>
                       
                        </div>
                    </div>
                
                </div>
            </div>
            <div className='social'>
                    <a target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a>
                    <a target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a>
                    <a target='_blank' href='#'><Instagram size={35}/></a>
                    <p>Lucas Almeida 2024</p>
                    <span class="blur"></span>
                </div>
        </div>
      
    );
};

export default Projetos;