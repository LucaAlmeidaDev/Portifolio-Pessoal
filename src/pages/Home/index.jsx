import './home.css';
import img from '../../assets/hero.png'
import Download from 'remixicon-react/DownloadFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'

function Home(){
    return(
        <div className='hero' id='home'>
                <div class="hero-text">
                    <h1>Lucas Almeida<a target='_blank' href='#'><Linkedin size={35}/></a><a target='_blank' href='#'><Github size={35}/></a></h1>
                    <h2>Fullstack Developer</h2>
                    <p>Eu sou um desenvolvedor Full Stack com conhecimento em React.Js, Node.Js, 
                        Java & Python e com o maior foco criações criativas, responsivas e de conforto para o usuário.</p>   
                    <a class="btn" href="Assets/github.png" download="github teste">Download CV <Download/></a>
                </div>
                <img className='img' src={img}/>
        </div>
    );
};  

export default Home;