import React, { useContext } from 'react'
import { Context } from '../../Context/AppContext'


const Controller = () => {

    const { input, setInput, createDiv, speedValue, setSpeedValue } = useContext(Context)

    return (
        <>
            <div className="controller-container w-full h-12 bg-yellow-300 flex items-center justify-center gap-4">
                {/* <div className="input">
                    <input type="text" className='p-1 border-0 outline-none' onChange={e => setSpeedValue(e.target.value)} value={speedValue} />
                </div> */}
                <div className="input">
                    <input className='p-1 border-0 outline-none' onChange={e => setInput(e.target.value)} value={input} type="text" />
                </div>
                <button onClick={createDiv} className='bg-red-600 text-white p-1'>Create Div</button>
            </div>
        </>
    )
}

export default Controller