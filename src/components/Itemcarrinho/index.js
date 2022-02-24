import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';




function Itemcarrinho({ itemIndex, carrinho}) {

    const { remover} = useContext(CartContext)

    const itemprecoBRL = carrinho.item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        
        <li className='item-carrinho'>
        
        <img className='img-carrinho' alt='imagem do produto' src={carrinho.item.img}></img>
        
        <span>{carrinho.item.nome} - Ninho com Nutella</span>
        
        <div className='div-especific-carrinho'>
        <span>{itemprecoBRL}</span>
        <button className='botaopadrao' onClick={() => remover(itemIndex)}>REMOVER</button>
        </div>
        

        </li>
    )
    
}
export default Itemcarrinho