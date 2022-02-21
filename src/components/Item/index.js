import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import SelectSabor from '../SelectSabor'




function Item({produtos}) {

    const { adicionar } = useContext(CartContext)
    
    return (
        
        
        
        <li className='item-produtos'>
        
        <img alt='imagem do produto' src={produtos.img}></img>
        <h2>{produtos.nome}</h2>
        <span>{produtos.preço}</span>
        <span>Escolha 1 sabor:</span>
        <SelectSabor/>
        
        <button onClick={() => adicionar(produtos)}>ADICIONAR</button>
        </li>
    )
    
}
export default Item