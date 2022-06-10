import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journey from './pages/Journey';

const Router = ({ journeys }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard journeys={journeys} />} />
        <Route path='/journeys/:id' element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
