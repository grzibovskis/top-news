import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tech from './components/Pages/News1/Tech';
import Tesla from './components/Pages/News2/Tesla';
import Business from './components/Pages/News3/Business';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const App = () => {
  return (
    <div>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Tech />}/>
          <Route exact path="tesla" element={<Tesla />}/>
          <Route exact path="business" element={<Business />}/>
        </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App