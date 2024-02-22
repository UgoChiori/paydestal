import React from 'react';
import "./getstarted.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Getstarted:React.FC = () => {
  return (
    <div className="getstarted-wrapper"> 
        <div className='getstarted-container'> 
            <h1>Ready to get started?</h1>
            <p>It only takes a few minutes to register your free account.</p>
            <button>Explore Our API
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    </div>
  )
}

export default Getstarted