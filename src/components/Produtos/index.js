import React from 'react'
import Item from '../Item'

function Produtos() {
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