import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App: React.FC = () => (
  <Router>
    <header style={{ padding: '1rem', backgroundColor: '#282c34' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          Cart
        </Link>
      </nav>
    </header>

    <main style={{ padding: '1rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  </Router>
);

export default App;
