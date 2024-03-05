import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
function HeroSection()
{
   return(
<div className='hero-container'>
<video src='/videos/videomega.mp4'
autoPlay loop muted />
   <div className='hero-btns'>
      <h1>Welcome to BioLabs </h1>
   
      <p>"Innovating Tomorrow's Science Today "</p>
      <button className='btns'  buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</button>
      <button className='btns'  buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/>
      </button>
      </div>
</div>



);}

export default HeroSection;