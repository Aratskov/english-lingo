// import { Favorites } from 'pages/Favorites';
// import { Home } from 'pages/Home';
// import { Teachers } from 'pages/Teachers';
// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout';

// export const App = () => {
//   return (
//     <>
//       <SharedLayout />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/teachers" element={<Teachers />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </>
//   );
// };


import { Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { Home } from "pages/Home";
import { AuthForm } from "./AuthForm/AuthForm";
import { Teachers } from "pages/Teachers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "redux/auth/authOperation";
import { Favorites } from "pages/Favorites";
import { isAuthSelect } from "redux/auth/authSelect";

const PrivateRoute = ({ component,redirectTo="/" }) => {
  const isAuth = useSelector(isAuthSelect)
  
  return isAuth ? component : <Navigate to={redirectTo}/>
}

const PublicRoute = ({ component,redirectTo="/" }) => {
  const isAuth = useSelector(isAuthSelect)
  
  return !isAuth ? component : <Navigate to={redirectTo}/>
}

export const App = ()=> {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<PublicRoute component={<AuthForm />}/>} />
          <Route path="register" element={<PublicRoute component={<AuthForm isRegister={true} />}/>} />
        </Route>
        <Route path="/teachers" element={<Teachers />}>
          <Route path="login" element={<PublicRoute component={<AuthForm />}/>} />
          <Route path="register" element={<PublicRoute component={<AuthForm isRegister={true} />}/>} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute component={<Favorites />}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

