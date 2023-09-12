import React from 'react'

const Memo3 = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const number = React.useMemo(() => {
        return arr.filter(x => x % 2 === 0)
    })
    console.log(number);
    return (
        <div>
            jup sanlar
            {number.map((i, key) => (
                <div key={key}>{i}</div>
            ))}
        </div>
    )
}

export default Memo3
