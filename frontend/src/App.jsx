
import './App.css'
import Nav from './components/Nav'
import Shoes from './components/Shoes'
import {Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div className='bg-zinc-900 w-screen min-h-[100vh]'>

        <Nav />
        <Outlet />
        {/* <Shoes /> */}
    </div>
  )
}

export default App
