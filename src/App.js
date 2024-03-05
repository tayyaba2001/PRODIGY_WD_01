import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import Services from './components/pages/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
      <Route path='/' element={<Home/>} />
    
      <Route path='/products' element={<Products/>} />
      <Route path ='/services' element={<Services/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
     <Footer/>
      </Router>
    </>
  );
}

export default App;

/*Route path="/" exact />: This tells the app that when someone visits the main entrance, 
which is the root path (/), 
something should happen. But here's the catch:
exact: It's like saying "only exactly here." This ensures that the app only pays 
attention to the main entrance and not to any paths similar to it.
Since there's no element specified, it means nothing special should appear when someone
 arrives at the main entrance. It's like saying, "Just acknowledge that someone is here,
 but don't show anything special for now."*/ 