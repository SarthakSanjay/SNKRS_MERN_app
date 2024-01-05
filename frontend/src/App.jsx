
import './App.css'
import Nav from './components/navItems/Nav'
import Notification from './components/Misc/Notification'
import {Outlet } from 'react-router-dom'
import Dropdown from './components/navItems/Dropdown'

function App() {
  
  return (
    <div className='bg-zinc-900 w-screen min-h-[100vh]'>

        <Nav />
        <Dropdown />
        {/* <Notification /> */}
        <Outlet />
    </div>
  )
}

export default App
