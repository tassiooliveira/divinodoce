import React from 'react'

import imagem from '../../database/download.jpg'


function Itemcarrinho({ itemIndex, carrinho, remover }) {
    
    return (
        
        
        <li>
        <h2>{carrinho.nome}</h2>
        <img alt='imagem do produto' src={imagem}></img>
        <span>{carrinho.preço}</span>
        <button onClick={() => remover(itemIndex)}>REMOVER</button>

        {console.log(carrinho)}
        </li>
    )
    
}
export default Itemcarrinho