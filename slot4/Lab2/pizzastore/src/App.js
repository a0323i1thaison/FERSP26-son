import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Slider from './components/slider';
import Menu from './components/menu';
import BookingForm from './components/bookingform';
import Footer from './components/footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import PizzaDetail from './components/PizzaDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Slider /><Menu /><BookingForm /></>} />
          <Route path="/about" element={<><Slider /><AboutUs /></>} />
          <Route path="/contact" element={<><Slider /><Contact /></>} />
          <Route path="/viewdetail/:id" element={<PizzaDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
