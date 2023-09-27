import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'

function Navbar() {
  return (
    <div className='px-10 py-6'>
        <Link to="/"><img src={logo} alt="Logotype" /></Link>
    </div>
  )
}

export default Navbar