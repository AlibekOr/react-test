import React from 'react'

const Callback3 = () => {
    const [enter, setEnter] = React.useState('')
    const [todo, setTodo] = React.useState([])
    const addTodo = React.useCallback(() => {
        if (enter.length !== 0) {
            setTodo((e) => [...e, enter])
            setEnter('')
        }
    }, [todo, enter])
    const index = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }
    return (
        <div>
            <h1>enter event</h1>

            <input type="text" value={enter} onChange={(e) => setEnter(e.target.value)} onKeyDown={index} />
            <div> {todo.map((e, key) => (
                <div key={key}>{e}</div>
            ))}</div>
        </div>
    )
}

export default Callback3
