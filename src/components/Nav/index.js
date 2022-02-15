import React from 'react'

function Nav() {
    return (
        <header>
            <nav className='nav-bar'>
            <div className='logo'>
                DIVINO DOCE BY CARLA
            </div>
            <div className='carrinho-button'>
                <a href="#">
                    <img className='carrinho-logo' alt='carrinho' src="../carrinho.png"></img>
                </a>
                <a href="#">
                    <img className='instagram-logo' alt='instagram' src="../instagram.png"></img>
                </a>

            </div>
        </nav>
        </header>
        
    )
}

export default Nav