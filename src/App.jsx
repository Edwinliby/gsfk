import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/home';
import Team from './Team/team';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/team", element: <Team /> },
  ]);

  useEffect(() => {
    fetch('https://api.buildnship.in/makemypass/integration/2f91a143-e4fd-446a-9edb-cd8909e9d59c/web-view/', { method: 'POST' });
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
