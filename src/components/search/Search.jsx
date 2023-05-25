import React from 'react'
import { BsSearch } from 'react-icons/Bs';


function Search() {
  const searchStyle ={

    borderRight:"1px solid black",
    paddingRight:"8px",
    color:"#111",
  }
  
  return (
    <div className='search' style={searchStyle}>
       <a href=""><BsSearch /></a>
    </div>
  )
}

export default Search
