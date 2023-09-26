import React from 'react'
import { NavLink } from "react-router-dom"
import { RightOutlined } from "@ant-design/icons"
import "./style.css"
const Blogs = () => {
    return (
        <>
            <div>
                <NavLink to={`/`}>home</NavLink> <RightOutlined /> <NavLink>Blog</NavLink>
            </div>
            <div className='divBlock'>
                <NavLink to={'/blogs/1'}>Vasiy</NavLink>
                <NavLink to={'/blogs/2'}>jek</NavLink>
                <NavLink to={'/blogs/3'}>alisa</NavLink>
                <NavLink to={'/blogs/4'}>bob</NavLink>
                <NavLink to={'/blogs/5'}>jek</NavLink>
            </div>

        </>)
}

export default Blogs
