import { Favorites } from 'pages/Favorites';
import { Home } from 'pages/Home';
import { Teachers } from 'pages/Teachers';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
