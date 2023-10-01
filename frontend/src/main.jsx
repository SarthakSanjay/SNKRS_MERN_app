import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shoes from './components/Shoes.jsx'
import ShoesDetails from './components/ShoesDetails.jsx'
import Wishlist from './components/wishlist/Wishlist.jsx'
import Men from './components/navItems/Men.jsx'
import Women from './components/navItems/Women.jsx'
import  Unisex from './components/navItems/Unisex.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Shoes />
      },
      {
        path: "men",
        element : <Men />
      },
      {
        path: "women",
        element : <Women />
      },
      {
        path: "unisex",
        element : <Unisex />
      },
      {
        path:"shoe/:id",
        element : <ShoesDetails />
      },
      {
        path:'wishlist',
        element : <Wishlist />
      }

    ]
    
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
