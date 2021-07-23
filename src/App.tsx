import React from 'react';

import './assets/css/styles.css'
import './assets/css/vendor.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';
import SayHello from './components/SayHello';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portofolio />
        <SayHello />
        <Footer />
      </>
    );
  }
}

export default App;
