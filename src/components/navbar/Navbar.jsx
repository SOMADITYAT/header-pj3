import React from 'react'
import NavItem from '../navItem/NavItem'

function Navbar() {
  const  navbarStyle ={
    display:"flex",
    gap:"20px",
   
  }
  return (
    <div className='navbar' style={navbarStyle}>
            <NavItem home="Home" pages="Pages" ourServices="OurServices" shop="Shop" blog="Blog" />
    </div>
  )
}

export default Navbar
