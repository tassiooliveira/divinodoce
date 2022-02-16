import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Item from '../Item'

function Produtos() {

    const ShoppingCart = () => {
        const [cart, setCart] = useState([])
      }
      


    return (
        <>
        <div>
            <h2 className='h2-titulo-ovos'>Ovos de Páscoa</h2>
        </div>
        <div className='produtos-itens'>
        <Item/>
        <Item/>
        <Item/>
        </div>
        
        </>
        
    )
}

export default Produtos