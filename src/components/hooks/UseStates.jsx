import React from 'react'

const UseStates = () => {
    const [click, setClick] = React.useState(false)
    const handelClick = () => {
        if (click === false) {
            setClick(true)
        } else {
            setClick(false)
        }
    }
    return (
        <div>
            <h4>Use State</h4>
            <div>
                {click === true ? 'click ' : 'hello world'}
            </div>
            <button onClick={handelClick}>btn</button>
        </div>
    )
}

export default UseStates
