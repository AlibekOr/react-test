import React from 'react'
import { NavLink } from "react-router-dom"
const Home = () => {
  return (
    <h4>
      <NavLink to={'/contact'}>Call senter</NavLink>
      <br />
      <NavLink to={'/profil'}>Profil</NavLink>
    </h4>
  )
}

export default Home
