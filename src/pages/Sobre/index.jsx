import './sobre.css';
import img from '../../assets/img.jpg';

function Sobre(){
    return(
        <div className='container'>
          <div>
            <img src={img}/>
          </div>
          <div className='sobre-text'>
            <h1>Sobre eu e meu trabalho:</h1>
            <p id='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
            <p id='p2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium</p>
            <p id='p3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
            <p id='p4'>Lorem ipsum dolor,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro sit amet consectetur adipisicing elit. Quos animi modi porroLorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi modi porro numquam harum voluptates distinctio cumque, culpa laboriosam, nam eos temporibus nesciunt sapiente quis molestias, quaerat facilis magni accusantium!</p>
          </div>
        </div>
    );
};

export default Sobre;