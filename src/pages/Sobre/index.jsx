import Profile from 'remixicon-react/ProfileFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'
import Perfil from '../../assets/Perfil.jpeg'

function Sobre() {
    return (
        <div>
            <div className="w-5/6 m-auto flex flex-col md:flex-row dark:text-white md:text-base ">
                <div className='mt-20'><img src={Perfil}></img></div>
                <div className='md:mt-14 md:ml-20'>
                    <h1 className='flex gap-1 my-6 font-bold text-xl'><Profile color='#22c55e' />Sobre.</h1>
                    <div className='gap-4 flex flex-col'>
                        <p>Sou um programador estudante de Análise e Desenvolvimento de Sistemas com experiência abrangente em várias linguagens de programação e tecnologias. Minha experiência abrange desde o desenvolvimento de front-end com React , Tailwind, JavaScript & Typescript, até a construção de aplicações robustas com NodeJs. Tenho proficiência em vários frameworks para desenvolvimento web, e estou comprometido em aprender e aplicar as melhores práticas do setor para criar produtos de alta qualidade. </p>
                        <p>Com uma abordagem direcionada a metodologias ágeis, estou pronto para enfrentar desafios e contribuir para o sucesso de projetos e equipes.</p>
                        <p>Habilidades Principais:
                        <p>•Desenvolvimento web utilizando JavaScript, Tailwind, TypeScript & React.</p>
                        <p>•Programação em Nodejs para criação de aplicações eficientes.</p>
                        •Experiência em Db Firebase para gerenciamento de dados.</p>
                      
                    </div>

                </div>

            </div>
            <div  className='dark:text-white text-black flex flex-col gap-2 items-center md:mt-16 mt-20 md:absolute bottom-0 mb-6 left-0 right-0 '> 
                <div className='flex'>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.instagram.com/lucasalmeida86355/'><Instagram size={35}/></a>
                </div>
                <p className='select-none'>Lucas Almeida ©2024</p>
            </div>
        </div>


    )
}

export default Sobre;
