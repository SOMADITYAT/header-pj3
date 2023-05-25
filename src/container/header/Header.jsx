import React from 'react'
import Logo from '../../components/logo/Logo'
import Navbar from '../../components/navbar/Navbar'
import Icons from '../../components/icons/Icons'

function Header() {
  // <MyComponent title="Hello, World!" />


   const headerStyle  = {
     display:"flex",
     justifyContent:"space-between",
     padding:"6px 12px",
     borderBottom:"1px solid black",
   }

  return (
    <div className='header' style={headerStyle}>
       <Logo/>
       <Navbar/>
       <Icons/>
    </div>
  )
}

export default Header
