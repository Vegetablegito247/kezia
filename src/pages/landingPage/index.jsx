import React from 'react';
import './landPage.css';
import LandHead from '../../components/home/head/LandHead';
import Services from '../../components/home/main/Services';
import Experience from '../../components/home/main/Experience';
import Engagements from '../../components/home/main/Engagements';
import AboutMe from '../../components/home/main/AboutMe';
import Gallery from '../../components/home/main/Gallery';
import Testimonial from '../../components/home/main/Testimonial';
import Subscribe from '../../components/home/main/Subscribe';

function LandingPage() {
  return (
    <div className='landing_page'>
        <LandHead />
        <Services />
        <Experience />
        <Engagements />
        <Gallery />
        <AboutMe />
        <Testimonial />
        <Subscribe />
    </div>
  )
}

export default LandingPage