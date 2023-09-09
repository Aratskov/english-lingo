import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/teachers">Teachers</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};
