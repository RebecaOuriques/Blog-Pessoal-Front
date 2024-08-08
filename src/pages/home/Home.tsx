//import React from "react";
import './Home.css'
import Login from '../../assets/Login.jpg'
import { useNavigate, Link } from 'react-router-dom'

function Home(){
    let navigate = useNavigate()
    return (
    <>

    <h1 className="text-slate-900 text-5xl m-4">Home</h1>
        <div>
        <button type='submit'
        className='hoover:underline mx-4' onClick={() => {navigate('/login')}}>
            Login useNavigate
        </button>
        <Link to='/login' className='hoover:underline mx-4'>Login por Link</Link>
        </div>
    <img className="img" src={Login} alt="Imagem tela inicial" />
    </>
    )

}

export default Home;