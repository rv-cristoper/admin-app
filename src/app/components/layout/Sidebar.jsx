import React from 'react'
import { NavLink } from 'react-router-dom'
import './scss/sidebar.scss'

const Sidebar = ({ setOpenMenu, openMenu }) => {
    return (
        <ul className={`sidebar ${openMenu ? 'active' : ''}`} >
            <li className='closeSide' onClick={() => setOpenMenu(false)}>X</li>
            <li><NavLink to='/users' onClick={() => setOpenMenu(false)}>Clientes</NavLink></li>
            <li><NavLink to='/clients' onClick={() => setOpenMenu(false)}>Usuarios</NavLink></li>
        </ul >
    )
}

export default Sidebar
