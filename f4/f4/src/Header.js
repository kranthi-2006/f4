import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className='h'>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mobiles">Mobiles</Link>
    </div>
  )
}

export default Header
