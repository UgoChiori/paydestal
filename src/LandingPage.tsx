import React from 'react'
import Company from './layout/Company';
import Services from './layout/Services';
import Servicelist from './layout/Servicelist';
import ExploreApi from './layout/ExploreApi';
import FAQs from './layout/FAQs';




const LandingPage:React.FC = () => {
  // const [slide, setSlide] = useState<boolean>(false);


  // useEffect(() => {
  //   function slideIn() {
  //     // console.log(window.scrollY)
  //     if (window.scrollY > 365 && !slide ) {
        
  //       setSlide(true);
  //     } 
  //   }
  //   window.addEventListener('scroll', slideIn);
  //   return () => {
  //     window.removeEventListener('scroll', slideIn);
  //   }
  // }, [] )
  return (
    <div>
      <Company  />
      <Services />
      <Servicelist />
      <ExploreApi />
      <FAQs />
      
     
      

    </div>
  )
}

export default LandingPage