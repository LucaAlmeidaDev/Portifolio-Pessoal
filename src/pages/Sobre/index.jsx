import './sobre.css';
import img from '../../assets/img.jpg';
import Linkedin from 'remixicon-react/LinkedinBoxFillIcon'
import Github from 'remixicon-react/GithubFillIcon'
import Instagram from 'remixicon-react/InstagramFillIcon'

function Sobre(){
    return(
      <div className='container'>
            <div id='sobre-container' >
              <div className='sobre-foto'>
                <img src={img} className='foto'/>
                <div className='img-back'></div>
              </div>
              <div className='sobre-text'>
                <h1>Sobre eu e meu trabalho:</h1>
                <p id='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
                <p id='p2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium</p>
                <p id='p3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
                <p id='p4'>Lorem ipsum dolor,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro sit amet consectetur adipisicing elit. Quos animi modi porroLorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
              </div>
          
          </div>
          <div className='social'>
                        <a target='_blank' href='https://www.linkedin.com/in/lucas-almeida-52b64522b'><Linkedin size={35}/></a>
                        <a target='_blank' href='https://github.com/LucaAlmeidaDev'><Github size={35}/></a>
                        <a target='_blank' href='#'><Instagram size={35}/></a>
                        <p>Lucas Almeida 2024</p>
          </div>
        </div> 
    );
};

export default Sobre;