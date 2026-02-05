import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Quan trọng nhất
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import News from './components/News';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import QuizProvider from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Navigation />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<div>About Page</div>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </QuizProvider>
  );
}
export default App;