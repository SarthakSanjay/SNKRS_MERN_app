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
import Cart from './components/cart/Cart.jsx'

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
        path: "category/men",
        element : <Men />
      },
      {
        path: "category/women",
        element : <Women />
      },
      {
        path: "category/unisex",
        element : <Unisex />
      },
      {
        path:"shoe/:id",
        element : <ShoesDetails />
      },
      {
        path:'wishlist',
        element : <Wishlist />
      },
      {
        path:'cart',
        element : <Cart />
      },

    ]
    
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
