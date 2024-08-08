//import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
               
                <div className='container flex justify-between text-lg'>
               
                    <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>
               
                    <div className='flex gap-4'>
                    <Link to='/login' className='hover:underline'>Login</Link>
                    <Link to='/home' className='hover:underline'>Home</Link>
                        <div className='hoover:underline'>Postagem</div>
                        <div className='hoover:underline'>Temas</div>
                        <div className='hoover:underline'>Cadastrar tema</div>
                        <div className='hoover:underline'>Perfil</div>
                        <div className='hoover:underline'>Sair</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar