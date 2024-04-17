import { Routes, Route, } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {

  return (
    <div id="container">
        <NavBar />

        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>  
        </div>

        <Footer />
      
    </div>
  )
}

export default App
