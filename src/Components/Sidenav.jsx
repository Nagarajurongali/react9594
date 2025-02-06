import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='sidenavbar bg-dark text-light'>
      <ul>
        <Link to='/dashboard'><li>Dashboard</li></Link>
        <Link to='/new'><li>DataFetch</li></Link> 
        <Link to='/mobiles'><li>Mobdata</li></Link> 
        <li>Dummy</li>
        <Link to='/'><li>logout</li></Link>

      </ul>
    </div>
  )
}

export default Sidenav