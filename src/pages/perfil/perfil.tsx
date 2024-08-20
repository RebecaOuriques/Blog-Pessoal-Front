import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta'
import blog2 from '../../assets/blog2.jpg'

const perfil = () => {

    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='grid grid-cols-2 w-full h-full container mx-auto mt-4 rounded-2xl overflow-hidden'>
            <div className='h-full'>
                <img className='object-cover h-full w-100vh' src={blog2} alt="Capa do Perfil" />
            </div>
            <div className='h-full'>
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto  border-8 border-white relative z-10' />
                <div className=" w-50  mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                </div>
            </div>
        </div>
    )
}

export default perfil
