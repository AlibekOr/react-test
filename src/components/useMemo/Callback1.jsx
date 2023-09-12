import React from 'react'

const Callback1 = () => {
    const [todo, setTodo] = React.useState([])
    const addTodo = React.useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);
    }, [todo]);
    console.log(todo);
    return (
        <div>
            <h2>My Todos</h2>
            {todo.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Callback1
