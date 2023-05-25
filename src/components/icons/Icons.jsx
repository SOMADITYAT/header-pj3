import React from 'react'
import Search from '../search/Search'
import Shopping from '../shopping/Shopping'

function Icons() {
  const iconsStyle = {
    display:"flex",
    alignItems:"center",
    gap:"16px",
    color:"black",

  }
  return (
    <div className='icons' style={iconsStyle}>
        <Search/>
        <Shopping/>
      
    </div>
  )
}

export default Icons
