import React, { useContext } from 'react'
import { Context } from '../../Context/AppContext'
import CreateDiv from '../CreateDiv/CreateDiv'


const Screen = () => {
    const { divArr } = useContext(Context)
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="container border border-double overflow-hidden scroll-smooth border-red-500 h-[90vh] mt-4 flex gap-4 flex-wrap p-1">
                    {
                        divArr.map((item, index) => {
                            return <CreateDiv item={item} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Screen