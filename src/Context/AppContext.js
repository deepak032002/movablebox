import { createContext, useEffect, useState } from "react";
const Context = createContext()

const AppState = ({ children }) => {
    const [divArr, setDivArr] = useState([])
    const [input, setInput] = useState(1)
    const [elemId, setElemId] = useState(null)
    const [speedValue, setSpeedValue] = useState(10)

    const handleClass = (e) => {
        const box = document.querySelectorAll('.box')
        box.forEach((box) => {
            if (box.id === e.target.id) {
                box.classList.add('active', 'bg-blue-600')
                box.classList.remove('bg-red-600')
            } else {
                box.classList.remove('active', 'bg-blue-600')
                box.classList.add('bg-red-600')
            }
        })
        setElemId(e.target.id)
    }

    useEffect(() => {
        elemId && window.addEventListener('keydown', (e) => {
            const elem = document.querySelector('.active');
            switch (e.keyCode) {
                case 37:
                    if (elem.offsetLeft < elem.parentElement.offsetLeft + 6) break;
                    elem.style.left = `${parseInt(window.getComputedStyle(elem, null).getPropertyValue('left')) - parseInt(speedValue)}px`
                    break;

                case 38:
                    if (elem.offsetTop < elem.parentElement.offsetTop + 6) break;
                    elem.style.top = `${parseInt(window.getComputedStyle(elem, null).getPropertyValue('top')) - parseInt(speedValue)}px`
                    break

                case 39:
                    if (elem.offsetLeft + elem.offsetWidth + 10 > elem.parentElement.offsetLeft + elem.parentElement.offsetWidth) break;
                    elem.style.left = `${parseInt(window.getComputedStyle(elem, null).getPropertyValue('left')) - (-parseInt(speedValue))}px`
                    break;

                case 40:
                    if(elem.offsetTop + elem.offsetHeight + 10 > elem.parentElement.offsetTop + elem.parentElement.offsetHeight) break;
                    elem.style.top = `${parseInt(window.getComputedStyle(elem, null).getPropertyValue('top')) - (-parseInt(speedValue))}px`
                    break;

                default:
                    break;
            }
        })
    }, [elemId, speedValue])

    const createDiv = () => {
        for (let i = 0; i < input; i++) {
            let id = new Date().getTime() + Math.floor(Math.random() * 100)
            const newDiv =
                <div id={id} className="bg-red-600 relative h-[12rem] w-[12rem] box" onClick={handleClass}></div>


            setDivArr((currentArr) => [...currentArr, newDiv])
        }
    }

    return (
        <Context.Provider value={{ input, setInput, createDiv, divArr, speedValue, setSpeedValue }}>
            {children}
        </Context.Provider>
    )

}

export { Context }
export default AppState