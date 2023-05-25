import React from 'react'
import { GoPlusSmall } from 'react-icons/Go';


function NavItem(props) {
  const  ulStyle = {
    display:"flex",
    gap:"16px",
    
    listStyle:"none",
  }
  const aStyle ={
    textDecoration:"none",
    color:"#111",
  }
  const spanStyle = {
    padding:"0 4px",
  }
  const hoverItemStyle = {
    color: 'red',
    // Additional styles for hovered list item
  };
  return (
    <div className='navItem' >
      <ul style={ulStyle}>
        <li ><a style={aStyle} href="home">{props.home} <span style={spanStyle}>+</span></a></li>
        <li ><a style={aStyle} href="pages">{props.pages} <span style={spanStyle}>+</span></a></li>
        <li ><a style={aStyle} href="ourServices">{props.ourServices} <span style={spanStyle}>+</span></a></li>
        <li ><a style={aStyle} href="shop">{props.shop} <span style={spanStyle}>+</span></a></li>
        <li><a style={aStyle} href="blog">{props.blog} </a></li>
      </ul>
        
      
    </div>
  )
}

export default NavItem
