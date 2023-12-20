import './projetos.css';
import img from '../../assets/img.jpg'
import ExportLink from 'remixicon-react/ExternalLinkFillIcon'

function Projetos(){
    return(
        <div className='wrap'>
            <div className='header'>
                <h1>Projetos recentes</h1>
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
    );
};

export default Projetos;