import React from 'react'
const initialTimerState = {
    second: 0
}
const timerFunck = (state, action) => {
    switch (action.type) {
        case 'Tick': {
            return { second: state.second + 1 }
        }
        default: return state;
    }
}
const Reduse4 = () => {
    const [timerRed, dispatch] = React.useReducer(timerFunck, initialTimerState)
    React.useEffect(() => {
        const interval = setInterval(() => { dispatch({ type: 'Tick' }) }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h2>Timer</h2>
            <div> {timerRed.second} </div>
        </div>
    )
}

export default Reduse4
