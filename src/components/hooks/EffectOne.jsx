import React from 'react'

const EffectOne = () => {
    const [input, setInput] = React.useState('')
    React.useEffect(() => {
        console.log('render');
    }, [])
    React.useEffect(() => {
        if (input.length > 0) {
            console.log('input value  ' + input);
        }
    }, [input])
    const handelChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <h4>Use Effect</h4>
            <input type="text" onChange={handelChange} />
        </div>
    )
}

export default EffectOne
