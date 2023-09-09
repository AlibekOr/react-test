import React from 'react'

const States = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default States
