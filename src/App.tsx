//import Flex from './components/Flex/Flex'
//import Grid from './components/Grid/Grid'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Elemento JSX/TSX => Função que retorna HTML

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
