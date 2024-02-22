import React from 'react';
import './exploreapi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const ExploreApi:React.FC = () => {
  return (
    <div className="explore-wrapper">
      <div className="explore-left">
        <img src="/images/rectangle.jpg" alt="rectangle" />
      </div>
        <div className="explore-right">
        <h1>
        Create tailored payment solutions using our thoroughly documented APIs
        </h1>
        <p>The in-depth and clear documentation of our APIs,  enables you to create,
from simple projects to intricate financial products catering to lots of customers. 
Got any ideas, it's time create.</p>
        <button>Explore Our API
        <FontAwesomeIcon icon={faAngleRight} />
        </button>
        </div>
    </div>
  )
}

export default ExploreApi