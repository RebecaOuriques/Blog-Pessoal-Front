
function Grid() {
    return (

        <>
        <div className='border-4 border-red-500 grid grid-cols-12'>
            <div className='col-span-1 bg-blue-500 h-[100vh]'>
                Servidores
            </div>
            <div className="col-span-10 grid grid-rows-3">
            <div className='border-2 border-black col-span-6 row-span-1 bg-purple-500'>
                Canais
            </div>
            <div className='col-span-6 bg-green-500 row-span-1'>
                Feed
            </div>
            <div className="border-2 col-span-2 border-black bg-red-600 row-span-1">
                eita
            </div>
            <div className="border-2 col-span-2 border-black bg-yellow-600 row-span-1">
                eita2
            </div>
            <div className="border-2 col-span-2 border-black bg-blue-500 row-span-1">
                eita3
            </div>
            </div>
            <div className='col-span-1 bg-yellow-500'>
                Participantes
            </div>
        </div>

        </>
    )
}

export default Grid