import React from "react";
import './Home.css'
import Login from '../../assets/Login.jpg'

function Home(){
    return (
    <>

    <h1 className="titulo">Home</h1>

    <img className="img" src={Login} alt="Imagem tela inicial" />
    </>
    )

}

export default Home;