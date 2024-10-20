import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../src/index.css"
export default function Nav() {
  return (
    <>
     <nav className="mt-10 flex justify-center gap-10" >
      {/* <Link  className='ml-4 ' to="/"> Home</Link>
      <Link className='ml-4' to="/contact"> Contact</Link>
      <Link className='ml-4'  to="/About"> About</Link> */}
       <NavLink  
       style={(e)=>{
        return{
            color:e.isActive?"tomato":"",
            fontWeight:e.isActive?"bold":"normal",
        }
       }}
        to="/"
       > Home</NavLink>
      <NavLink className={(e)=>{
        return[
            e.isActive?"text-red-300":"",
            e.isActive?"font-bold":"",
       
        ].join(" ")
      }}
       to="/contact"> Contact</NavLink>
      <NavLink   to="/About"> 
      {(e)=>{
        return(
            <span className={[
                [
                    e.isActive?"text-red-300":"",
                    e.isActive?"font-bold":"",
               
                ].join(" ")
            ]}> About</span>
        )
      }}
      </NavLink>
    </nav>
    </>
  )
}


