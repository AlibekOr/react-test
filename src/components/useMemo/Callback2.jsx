import React from 'react'

const Callback2 = () => {
    const [count, setCount] = React.useState(0)
    const handelCilck = React.useCallback(() => {
        setCount(count + 1)
    }, [count])
    console.log(`count:${count}`);
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={handelCilck}>+</button>
        </div>
    )
}

export default Callback2
