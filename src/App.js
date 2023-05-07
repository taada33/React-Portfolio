import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"

import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Resume from './components/Pages/Resume';





function App() {
  const [currentPage, setCurrentPage] = useState('About');
  
  
  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return (
        <>
        <h2>Portfolio</h2>
        <div className="project-container">
        <Portfolio />
        </div>
        </>
      ) 
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <div>
      {/*Calling Header div */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div className='page'>{renderPage()}</div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
