import React from 'react'
import UseStates from './components/hooks/UseStates'
import States from './components/hooks/States'
import EffectOne from './components/hooks/EffectOne'
import Props from './components/props/Props'
import UseRef from './components/hooks/UseRef'
import Email from './components/hooks/Email'
import Scroll from './components/hooks/Scroll'
const App = () => {
    return (
        <div className='con'>
            <UseStates />
            <States />
            <EffectOne />
            <Props />
            <UseRef />
            <Email />
            <Scroll />
        </div>
    )
}

export default App
