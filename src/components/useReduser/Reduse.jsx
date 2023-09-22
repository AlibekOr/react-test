import React from 'react'
const initialState = [0]
const redus = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return Number(state) + 1
        case "DECREMENT":
            return state - 1
        default: return state
    }
}
const Reduse = () => {
    const [todo, dispatch] = React.useReducer(redus, initialState)
    const onClickInc = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const onClickDec = () => {
        dispatch({ type: 'DECREMENT' })
    }
    return (
        <div>
            <div> {todo} </div>
            <button onClick={onClickInc} >+</button>
            <button onClick={onClickDec}>-</button>
        </div>
    )
}

export default Reduse
