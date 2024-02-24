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
import Specialty from '../../components/home/main/Specialty';

function LandingPage() {
  return (
    <div className='landing_page'>
        <LandHead />
        <AboutMe />
        <Services />
        <Experience />
        <Engagements />
        <Gallery />
        <Specialty />
        <Testimonial />
        <Subscribe />
    </div>
  )
}

export default LandingPage