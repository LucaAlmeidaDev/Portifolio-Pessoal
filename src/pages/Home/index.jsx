import './home.css';

function Home(){
    return(
        <div className='hero' id='home'>
                <div class="hero-text">
                    <h1>Lucas Almeida</h1>
                    <h2>Fullstack Developer</h2>
                    <p>Eu sou um desenvolvedor Full Stack com conhecimento em React.Js, Node.Js, 
                        Java & Python e com o maior foco criações criativas, rapidas, responsivas
                        e de conforto para o úsuario. Apesar de relativamente novo na área dedico 
                        todo o meu tempo para me manter atualizado.</p>   
                    <a class="btn" href="Assets/github.png" download="github teste" >Download CV<i class="ri-download-line"></i></a>
                </div>
        </div>
    );
};  

export default Home;