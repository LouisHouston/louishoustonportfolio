import background from '../imgs/blue-tech-background.jpeg';
import './photocard.css';

function Photocard () {
    return (
        <div className="nocap"> 
       
        <img src={background} alt="Sciencey Picture of circuits" />
        <div class="centered"> Hello, my name is Louis Houston </div>
        </div>
        
    );
}


export default Photocard;