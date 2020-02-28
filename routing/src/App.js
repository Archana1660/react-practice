import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TShirts from './components/TShirts';
import Brand from './components/Brands';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
     <Route path="/" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/tshirts" exact component={TShirts}/>
     <Route path="/tshirts/:brand" component={Brand}/>
   </Router>
  )
}

export default App;
