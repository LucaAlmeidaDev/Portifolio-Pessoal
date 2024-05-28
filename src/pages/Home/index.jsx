import Download from 'remixicon-react/DownloadFillIcon'
import Curriculum from '../../assets/Currículo.pdf  '
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Map from 'remixicon-react/MapPin2LineIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'
import Herogif from '../../assets/hero2.png'


function Home(){
    return(
        <div className='m-auto w-5/6 text-black dark:text-white'> 
        <div className='flex flex-col-reverse lg:mt-40 lg:flex-row justify-between'>
            <div class="hero-text mt-6 ">
                <h1 className='font-semibold text-2xl'>Lucas Almeida</h1>
                <h2 className='font-bold text-2xl text-green-500'>Fullstack Developer</h2>
                <span class="blur"></span>
                <p className='text-base lg:w-3/6'>Eu sou um desenvolvedor Full Stack com maior foco em node.js e inclinado para realizar criações criativas, responsivas e de conforto para o usuário.</p>   
                <p className='flex gap-2 mt-1'><Map className='text-green-500' size={20}/> Brasília, Brasil.</p>
                <a className='select-none mt-6 flex border-2 border-solid h-12 w-56 items-center justify-center border-green-500 rounded-3xl gap-3 hover:border-transparent hover:bg-green-500 hover:text-white transition-all duration-300 hover:translate-y-1 hover:scale-110' href={Curriculum} download="Lucas Curriculum">Download CV <Download/></a>
            </div>
            <div className='flex flex-col text-center w-full'>
                <img src={Herogif} className='flex w-96 h-96 mx-auto lg:-mt-20'></img>
                <p className='text-xs'>Web illustrations by Storyset</p>
            </div>

        </div>
      
      
 
            <div  className='flex flex-col gap-2 items-center md:mt-16 mt-20 md:absolute bottom-0 mb-6 left-0 right-0 '> 
                <div className='flex'>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.instagram.com/lucasalmeida86355/'><Instagram size={35}/></a>
                </div>
                <p className='select-none'>Lucas Almeida ©2024</p>
            </div>
    </div>

    );
};

export default Home;