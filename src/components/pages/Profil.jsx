import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { RightOutlined } from "@ant-design/icons"
const Profil = () => {
    return (
        <>
            <div>
                <NavLink to={`/`}>home</NavLink> <RightOutlined /> profil
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, harum.
            </div>
        </>
    )
}

export default Profil
