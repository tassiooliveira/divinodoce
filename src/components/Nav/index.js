import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom'

function Nav() {

    const { carrinho, setcarrinho } = useContext(CartContext)
    const divgeral_navlink = (carrinho.length>0) ? 'navlink-div-geral' : 'navlink-div-geral-oculto'

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
                <a href="https://api.whatsapp.com/send?phone=5579999015361">
                    <img className='img-nav-bar' alt='whatsapp' src="../whatsapp.png"></img>
                </a>
              
            </div>
        </nav>
        <NavLink onClick={setcarrinho} className={divgeral_navlink} to='/carrinho'>
            <div className='div-botaoflutuante'>
            <img className='img-nav-bar' alt='carrinho' src="../carrinho.png"></img>
            <span className='navlink-carrinho' >{carrinho.length}</span>
            </div>
                   
               </NavLink>
        </header>
        
    )
}

export default Nav