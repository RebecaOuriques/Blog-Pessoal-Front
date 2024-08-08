//import Flex from './components/Flex/Flex'
//import Grid from './components/Grid/Grid'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Elemento JSX/TSX => Função que retorna HTML

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>


    </>
  )
}



export default App
