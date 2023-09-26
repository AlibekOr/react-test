import React from 'react'
import { RightOutlined } from "@ant-design/icons"
import { useParams, NavLink } from "react-router-dom"
const Info = () => {
    const { id } = useParams()
    return (
        <div>
            <div>
                <NavLink to={`/`}>home</NavLink> <RightOutlined /> <NavLink to="/blogs">Blog</NavLink><RightOutlined />{id}
            </div>
            <div>
                hello user {id}
            </div>
            <NavLink to={'/blogs'}>back</NavLink >
        </div>
    )
}

export default Info
