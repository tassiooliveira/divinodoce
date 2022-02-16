import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <nav className='nav-bar'>
            <NavLink className='navlink' to='/'>
            <div className='logo'>
                DIVINO DOCE BY CARLA
            </div>
            </NavLink>
           
            <div className='carrinho-button'>
               
               <NavLink to='/carrinho'>
                    <img className='carrinho-logo' alt='carrinho' src="../carrinho.png"></img>
               </NavLink>
                

    
                
                <a href="https://www.instagram.com/divinodocebycarla/">
                    <img className='instagram-logo' alt='instagram' src="../instagram.png"></img>
                </a>

            </div>
        </nav>
        </header>
        
    )
}

export default Nav