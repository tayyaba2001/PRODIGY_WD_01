import React from 'react';
import Cards from '../Cards';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import '../../App.css';
import HeroSection from '../HeroSection';
/* ../../ parent parent directory  ./ same directory */
function Home() {
  return (
<>
<HeroSection />
<Cards />
    </>
  );
}
export default Home;