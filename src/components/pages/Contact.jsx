import React from 'react'
import { RightOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"
const Contact = () => {
    return (
        <>
            <div>
                <NavLink to={`/`}>home</NavLink> <RightOutlined /> contact      
            </div>
            <div>
                contact
            </div>

        </>
    )
}

export default Contact
