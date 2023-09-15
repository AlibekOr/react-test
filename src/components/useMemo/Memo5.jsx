import React from 'react'

const Memo5 = () => {
    const arr = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 3]
    const target = 2
    const count = React.useMemo(() => {
        console.log("hello world!")
        return arr.reduce((acc, element) => (element === target ? acc + 1 : acc), 0)
    }, [target, arr])
    return (
        <div>
            <div>{count}</div>
            <div>{target}</div>
        </div>
    )
}

export default Memo5
