
import './App.css'
import Nav from './components/Nav'
import Notification from './components/Notification'
import Shoes from './components/Shoes'
import {Outlet } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  
  return (
    <div className='bg-zinc-900 w-screen min-h-[100vh]'>

        <Register />
        <Nav />
        {/* <Notification /> */}
        <Outlet />
        {/* <Shoes /> */}
    </div>
  )
}

export default App
