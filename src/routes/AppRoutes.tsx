import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AppRoutes;
