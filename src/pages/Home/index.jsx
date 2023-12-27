import './home.css';
import img from '../../assets/hero.png'
import Download from 'remixicon-react/DownloadFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Map from 'remixicon-react/MapPin2LineIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'

function Home(){
    return(
        <div className='container'> 
            <div className='hero' id='home'>
                <div class="hero-text">
                    <h1>Lucas Almeida</h1>
                    <h2>Fullstack Developer</h2>
                    <span class="blur"></span>
                    <p>Eu sou um desenvolvedor Full Stack com conhecimento em React.Js, Node.Js, 
                        Java & Python e com o maior foco criações criativas, responsivas e de conforto para o usuário.</p>   
                    <p><Map size={25}/> Brasília, Brasil.</p>
                    <a class="btn" href="Assets/github.png" download="github teste">Download CV <Download/></a>

               
                </div>
                <img className='img' src={img}></img>
                
                
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

export default Home;