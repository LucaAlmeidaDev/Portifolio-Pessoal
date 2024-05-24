import Profile from 'remixicon-react/ProfileFillIcon'
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'
import Perfil from '../../assets/Perfil.jpeg'

function Sobre() {
    return (
        <div>
            <div className="w-5/6 m-auto flex flex-col md:flex-row dark:text-white">
                <div className='mt-20'><img src={Perfil}></img></div>
                <div className='md:mt-14 md:ml-20'>
                    <h1 className='flex gap-1 my-6 font-bold text-xl'><Profile color='#22c55e' />Sobre.</h1>
                    <div className='gap-4 flex flex-col'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, reprehenderit commodi voluptates et inventore id vel? Quo quaerat voluptas, facere itaque rem dolore facilis similique. Eligendi architecto ipsam quasi deserunt.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, reprehenderit commodi voluptates et inventore id vel? Quo quaerat voluptas, facere itaque rem dolore facilis similique. Eligendi architecto ipsam quasi deserunt.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, reprehenderit commodi voluptates et inventore id vel? Quo quaerat voluptas, facere itaque rem dolore facilis similique. Eligendi architecto ipsam quasi deserunt.</p>
                    </div>

                </div>

            </div>
            <div className='flex flex-col gap-2 items-center mt-32 mb-8 md:mt-16 dark:text-white'>
                <div className='flex'>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35} /></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35} /></a>
                    <a className='transition-all hover:text-green-500 hover:translate-y-1 hover:scale-125' target='_blank' href='https://www.instagram.com/lucasalmeida86355/'><Instagram size={35} /></a>
                </div>
                <p className='select-none'>Lucas Almeida ©2024</p>
            </div>
        </div>


    )
}

export default Sobre;
