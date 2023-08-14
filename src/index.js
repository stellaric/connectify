import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Routes/ErrorPage';
import Connexion from './pages/Connexion/Connexion.js'
import Inscription from './pages/Inscription/Inscription'
import Profil from './pages/Profil/Profil'
import Contact from './pages/Contact/Contact'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path: "connexion",
    element:<Connexion/>
  },
  {
    path: "inscription",
    element:<Inscription/>
  },
  {
    path:"profil",
    element:<Profil/>
  },
  {
    path:"contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
 
  
);

