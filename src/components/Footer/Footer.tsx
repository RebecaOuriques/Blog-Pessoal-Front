import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className='flex flex-row justify-center bg-indigo-900 text-white'>
          <div className='flex flex-col items-center py-4'>
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <Link to='https://www.linkedin.com/in/rebeca-ouriques/'>
              <LinkedinLogo size={32} weight='bold' /></Link>
              <InstagramLogo size={32} weight='bold' />
              <FacebookLogo size={32} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer