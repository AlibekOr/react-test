import React from 'react'

const Memo4 = () => {
    const arr = ['s', 'b', 'w', 'a', 't', 'h', 'i', 'o',]
    console.log(arr);
    const stirg = arr.sort()
    console.log(stirg);
    return (
        <div>
            {stirg}
        </div>
    )
}

export default Memo4
