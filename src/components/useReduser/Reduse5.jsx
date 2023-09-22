import React from 'react'
const initialState = {
    items: []
}
const redus = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CLICKSUBMIT': {
            return { ...state, items: [...state.items, action.paylod] };
        }
        default: return state
    }
}
const Reduse5 = () => {
    const [val, setVal] = React.useState({
        id: '',
        email: '',
        name: '',
    })
    const [form, dispatch] = React.useReducer(redus, initialState)
    const handelChange = (e) => {
        const current = e.target.value
        setVal({
            ...val, [e.target.name]: current
        })
    }
    const clicksubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'CLICKSUBMIT', paylod: val })
        setVal({
            id: '',
            email: '',
            name: '',
        })
    }
    return (
        <div>
            <h2>Redus 5 </h2>
            <form>
                <input value={val.id} name='id' type="number" onChange={handelChange} placeholder='id' />
                <input type="text" name='name' value={val.name} onChange={handelChange} placeholder='name' />
                <input type="email" name='email' value={val.email} onChange={handelChange} placeholder='email' />
                <button onClick={clicksubmit}>btn</button>
            </form>
        </div>
    )
}

export default Reduse5
