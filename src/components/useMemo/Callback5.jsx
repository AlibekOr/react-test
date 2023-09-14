import React, { useCallback } from 'react'
import "./cal.css"
const Callback5 = () => {
    const [show, setShow] = React.useState(false)
    const handelClick = useCallback(() => {
        if (show === false) {
            setShow(true)
        } else { setShow(false) }
    }, [show])
    return (
        <div>
            <div className={`callback  ${show === true ? 'active' : ''}`}>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi!</div>
            </div>
            <button onClick={handelClick}>btn</button>
        </div >
    )
}

export default Callback5
