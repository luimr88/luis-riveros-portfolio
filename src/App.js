import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div className="">
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : (
          <></>
        )}
        {contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : (
          <></>
        )}
    </main>
    </div >
  );
}

export default App;
