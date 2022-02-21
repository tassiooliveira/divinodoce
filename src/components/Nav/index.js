import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom'

function Nav() {

    const { carrinho } = useContext(CartContext)

    return (
        <header>
            <nav className='nav-bar'>
            <NavLink className='navlink' to='/'>
            <img className='logo' alt='logo divino doce' src="../divinodoce.png"></img>
            </NavLink>
           
            <div className='carrinho-button'>

            <a href="https://www.instagram.com/divinodocebycarla/">
                    <img className='img-nav-bar' alt='instagram' src="../instagram.png"></img>
                </a>
               
               <NavLink className='navlink' to='/carrinho'>
                    <img className='img-nav-bar' alt='carrinho' src="../carrinho.png"></img>
                    <span className='navlink-carrinho' >{carrinho.length}</span>
               </NavLink>
            </div>
        </nav>
        </header>
        
    )
}

export default Nav