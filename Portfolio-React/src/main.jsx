import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Error from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>
);