import React from 'react'

const Memo7 = () => {
    const [number, setNumber] = React.useState(0)
    const bigNum = (num) => {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result
    }

    const numbers = React.useMemo(() => bigNum(number), [number])
    const handelChange = (e) => {
        setNumber(e.target.value);
    }
    return (
        <div>
            <h2>Factorial</h2>
            <div>{numbers}</div>
            <input type="number" onChange={handelChange} />
        </div>
    )
}

export default Memo7
