import React from 'react';
import CardItem from './CardItem';
import '../App.css';

import { Button } from './Button';
//mport img1 from '../images/img-9.jpg';
// import img2 from 'images/img2.jpg';
import './Cards.css';
function Cards() {
  return (
 <>
    <div className='cards'>
      <h1>Check out theseEpic Destinations</h1>
<div className='cards__container'>
<div className='cards__wrapper'>
<ul className='cards__items'>
 <CardItem 
  src='/images/download11.jpg'
  text='Exploring the Role of Microorganisms in Soil Health'
  label='Innovation'
  path='/services'
 />
<CardItem src='images/download33.jpg' text='Studying the Genetic Basis of Neurodegenerative Diseases' label='Genetic' path='/services'/></ul>
<ul className='cards__items'>

<CardItem src='images/download55.jpg' text='Investigating Alternative Energy Sources' label='Energy' path='/services'/>
<CardItem src='images/downlaod22.jpg' text='Studying the Role of Gut Microbiota in Human Health' label='Microbia' path='/services'/>

<CardItem src='images/download44.jpg' text='Group photo' label='Gallery' path='/services'/>

</ul>

</div>
</div>
 </div>

</>
  );
}

export default Cards;
