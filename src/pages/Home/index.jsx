import './home.css';
import img from '../../assets/hero.png'
import Download from 'remixicon-react/DownloadFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Map from 'remixicon-react/MapPin2LineIcon'

function Home(){
    return(
        <div className='hero' id='home'>
                <div class="hero-text">
                    <h1>Lucas Almeida<a target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a><a target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a></h1>
                    <h2>Fullstack Developer</h2>
                    <p>Eu sou um desenvolvedor Full Stack com conhecimento em React.Js, Node.Js, 
                        Java & Python e com o maior foco criações criativas, responsivas e de conforto para o usuário.</p>   
                    <p><Map size={25}/> Brasília, Brasil.</p>
                    <a class="btn" href="Assets/github.png" download="github teste">Download CV <Download/></a>

               
                </div>
                <img className='img' src={img}/>
        </div>
    );
};  

export default Home;