import React from 'react'
const bigData = num => {
    let i = 1
    console.log('render');
    while (i < 1000000000) i++
    return num + 1
}
const Memo6 = () => {
    const [count, setCount] = React.useState(0)
    const [num, setNum] = React.useState(0)
    const increment = () => {
        setCount((c) => c + 1)
    }
    const decrement = () => {
        setCount((c) => c - 1)
    }
    const number = React.useMemo(() => (
        bigData(count)
    ), [count])
    return (
        <>
            <div>
                <div>Count</div>
                <div> {num} </div>
                <button onClick={() => setNum((i) => i + 1)}>+</button>
                <button onClick={() => setNum((i) => i - 1)}>-</button>
            </div>
            <div>
                <h4>Use Memo</h4>
                <div> {number} </div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Memo6
