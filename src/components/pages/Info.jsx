import React from 'react'
import { useParams, NavLink } from "react-router-dom"
const Info = () => {
    const { id } = useParams()
    return (
        <div>
            <div>
                hello user {id}
            </div>
            <NavLink to={'/blogs'}>back</NavLink >
        </div>
    )
}

export default Info
