import React from 'react'

import imagem from '../../database/download.jpg'


function Itemcarrinho({ itemIndex, carrinho, remover}) {
    
    return (
        
        
        <li className='item-carrinho'>
       
        <img className='img-carrinho' alt='imagem do produto' src={imagem}></img>
        <span>{carrinho.item.nome}</span>
        <span>{carrinho.item.preço}</span>
        <button onClick={() => remover(itemIndex)}>REMOVER</button>
        </li>
    )
    
}
export default Itemcarrinho