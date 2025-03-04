import React, { useRef } from 'react';
import Header from './Header';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import "./App.css";
import Experience from './Experience';
const Body = () => {
  
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);
  const experiencePageRef = useRef(null);
  const fourthPageRef = useRef(null);



  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className='overflow-hidden bg-custom'>
      <Header
        scrollToFirstPage={() => scrollToSection(firstPageRef)}
        scrollToSecondPage={() => scrollToSection(secondPageRef)}
        scrollToThirdPage={() => scrollToSection(thirdPageRef)}
        scrollToExperience={()=> scrollToSection(experiencePageRef)}
        scrollToFourthPage={() => scrollToSection(fourthPageRef)}
      />

      <div ref={firstPageRef}><FirstPage /></div>
      <div ref={secondPageRef}><SecondPage /></div>
      <div ref={thirdPageRef}><ThirdPage /></div>
      <div ref={experiencePageRef}><Experience/></div>
      <div ref={fourthPageRef}><FourthPage /></div>
    </div>
  );
}

export default Body;
