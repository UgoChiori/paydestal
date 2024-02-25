import React, {useEffect} from "react";
import "./exploreapi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreApi: React.FC = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="explore-wrapper">
      <div className="explore-left">
        <img src="/images/rectangle.jpg" alt="rectangle" />
      </div>
      <div className="explore-right"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h1>
          Create tailored payment solutions using our thoroughly documented APIs
        </h1>
        <div className="explore-right-right">
          <p>
            The in-depth and clear documentation of our APIs, enables you to
            create, from simple projects to intricate financial products
            catering to lots of customers. Got any ideas? it's time to create.
          </p>

          <button>
            Explore Our API
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreApi;
