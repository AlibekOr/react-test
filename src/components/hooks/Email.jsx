import React from 'react'

const Email = () => {
    const inputElements = React.useRef()
    const [input, setInput] = React.useState()
    const handelChange = (e) => {
        setInput(e.target.value)
    }
    const handelCilck = (e) => {
        inputElements.current.value = ''
        setInput('')
        e.preventDefault()
    }
    return (
        <div>
            <form >
                <p>{input}</p>
                <input ref={inputElements} onChange={handelChange} type="text" />
                <button onClick={handelCilck}>rez porol</button>
            </form>

        </div>
    )
}

export default Email