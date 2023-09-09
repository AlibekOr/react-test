import React from 'react'
import Hello from './Hello'
import Prodouct from './Prodouct'
import List from './List'

const Props = () => {
    const tasks = [
        { name: 'Hello1', task: 'jsx' },
        { name: 'Hello2', task: 'react' },
        { name: 'Hello3', task: 'veu' },
        { name: 'Hello4', task: 'php' },
        { name: 'Hello5', task: 'pythone' },
    ]
    const [prudoct, setPrudoct] = React.useState({
        name: '',
        price: '0',
        dec: '',
    })
    const handelChange = (e) => {
        setPrudoct({
            ...prudoct, [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <h4>Props</h4>
            <Hello hello='Alica' />
            <Hello hello='Jek' />
            <Hello hello='Bob' />
            <input type="text" onChange={handelChange} name='name' />
            <input type="number" onChange={handelChange} name='price' />
            <input type="text" onChange={handelChange} name='dec' />
            <Prodouct prudoct={prudoct} />
            <List tasks={tasks} />
        </div>
    )
}

export default Props
