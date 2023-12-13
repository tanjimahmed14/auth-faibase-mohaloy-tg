import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './componints/Navber'

function App() {


  return (
    <>
      <Navber></Navber>
      <div className='w-3/4 mx-auto'>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
