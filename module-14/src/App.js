import React from 'react'
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Footer from './Component/Footer';
import Team from './Component/Team';
import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer /> */}

{/* <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router> */}

<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

    </div>

    
  );
}

export default App
