import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Login from './Components/Login/Login'
import Registro from './Components/Registro/Registro'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/Login' element= {<Login/>}></Route>
      <Route path='/Registrarse' element= {<Registro/>}></Route>
      <Route path='*' element= {<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
