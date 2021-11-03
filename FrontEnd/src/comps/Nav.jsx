import React from 'react'
import {Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='navContainer'>
           <div className="navLogo">
               <h1>AnyMag</h1>
            </div>
           <div className="nav">
                <Link to='home'> Home </Link>
                <Link to='department'> Department </Link>
           </div>
           <div className="profile">
               <button>signin</button>
           </div>
        </div>
    )
}

export default Nav
