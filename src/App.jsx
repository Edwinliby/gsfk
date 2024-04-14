import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/home';
import Team from './Team/team';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/team", element: <Team /> },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
