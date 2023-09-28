
import './App.css'
import Nav from './components/Nav'
import Shoes from './components/Shoes'
import {Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='bg-blue-100 w-screen h-[100%]'>

        <Nav />
        <Outlet />
        {/* <Shoes /> */}
    </div>
  )
}

export default App
