import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import App from './App.js';
import Journey from './pages/Journey';

const Router = ({ journeys }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/journeys' element={<Dashboard journeys={journeys} />} />
        <Route path='/journeys/:id' element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
