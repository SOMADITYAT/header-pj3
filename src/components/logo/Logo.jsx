import React from 'react'
import logo  from "/images/logo.jpg"

function Logo() {

  const logoStyle ={
    height:"18px"

  }
  return (
    <div className='logo' style={logoStyle}>
        <img src={logo} alt="logo" width={60} />
    </div>
  )
}

export default Logo
