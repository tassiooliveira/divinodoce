import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';




function Itemcarrinho({ itemIndex, carrinho}) {

    const { remover} = useContext(CartContext)

    return (
        
        <li className='item-carrinho'>
       
        <img className='img-carrinho' alt='imagem do produto' src={carrinho.item.img}></img>
        <span>{carrinho.item.nome}</span>
        <span>R$ {carrinho.item.preco},00</span>
        <button onClick={() => remover(itemIndex)}>REMOVER</button>
        
        </li>
    )
    
}
export default Itemcarrinho