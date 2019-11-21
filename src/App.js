import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Smallspotlist from './components/Smallspotlist';
import Spotlist from './components/Spotlist';
import IconBarFooter from './components/IconBarFooter';

function App() {
  return (
      <div>
        <Header/>
        <Hero />
        <Smallspotlist />
        <Spotlist /> 
        <IconBarFooter />
        <Footer />
      </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
