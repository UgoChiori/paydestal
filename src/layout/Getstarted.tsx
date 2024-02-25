import React, {useEffect} from 'react';
import "./getstarted.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Getstarted:React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);


  return (
    <div className="getstarted-wrapper"
      data-aos="fade-up"
      data-aos-duration="500"
    > 
        <div className='getstarted-container'> 
            <h1>Ready to get started?</h1>
            <p>It only takes a few minutes to register your free account.</p>
            <button>Get Started
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    </div>
  )
}

export default Getstarted