import React from 'react'
// Vazifalar roʻyxati elementlarini qoʻshish va oʻchirish uchun useReducer kancasidan foydalanadigan vazifalar roʻyxati komponentini yarating.
const todos = {
    items: [
        {
            id: 1,
            name: 'John',
        },
        {
            id: 2,
            name: 'Alice',
        },
        {
            id: 3,
            name: 'Jek',
        },
    ]
}

const redus2 = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, items: [...state.items, action.paylode] }
        case "REMOVE":
        default: return state
    }
}
const Reduse2 = () => {
    const [newState, setNewState] = React.useState({
        id: '',
        name: ''
    })
    const handelChange = (e) => {
        const current = e.target.value
        setNewState(
            { ...newState, [e.target.name]: current }
        )
    }
    const [todo, dispatch] = React.useReducer(redus2, todos)
    const addClick = () => {
        dispatch({ type: 'ADD', paylode: newState })
        setNewState({
            id: '',
            name: ''
        })

    }
    const removeClick = (e) => {
        dispatch({ type: 'REMOVE', })
        console.log(e.currentTarget);
    }
    return (
        <div>
            {todo.items.map((todo, key) => (
                <div key={key}>
                    <span>{todo.id}.</span>
                    <span>{todo.name}</span>
                    <button onClick={removeClick(todo.id)}>remove</button>
                </div>
            ))}
            <input name='id' value={newState.id} type="number" placeholder='0' onChange={handelChange} />
            <input name='name' value={newState.name} type="text" placeholder='name' onChange={handelChange} />
            <button onClick={addClick}>add</button>
        </div>
    )
}

export default Reduse2
