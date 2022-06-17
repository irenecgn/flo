import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journey from './pages/Journey';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/journeys/:id' element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
