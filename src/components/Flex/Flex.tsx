//import React from 'react'

function Flex(){
    return (
        <div className='border-4 border-[#14a3dc] 
        m-8 p-8 flex items-center justify-center'>
            <div className='w-[250px] p-8'>
                <h1 className="text-2xl">Kratos</h1>
                <p>Matador de deuses, mais poderoso que Zeus.</p>
            </div>

            <div className='w-[250px]'>
                <img src='https://s2-techtudo.glbimg.com/STP10ZKsjVLNQcPF2EAmI6752j0=/0x0:300x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/E/n/vPLBLXSiSogXl54nwgEA/2011-09-12-4-1.jpg' alt='Kratos'/>
            </div>
        </div>
    )
}

export default Flex