import React from 'react'
import Company from './layout/Company';
import Services from './layout/Services';
import Servicelist from './layout/Servicelist';
import ExploreApi from './layout/ExploreApi';
import FAQs from './layout/FAQs';
import Footer from './layout/Footer';
import Getstarted from './layout/Getstarted';



const LandingPage:React.FC = () => {
  return (
    <div>
      <Company />
      <Services />
      <Servicelist />
      <ExploreApi />
      <FAQs />
      <Getstarted />
      <Footer />
      

    </div>
  )
}

export default LandingPage