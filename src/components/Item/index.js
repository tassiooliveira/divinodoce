import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import SelectSabor from '../SelectSabor'




function Item({produtos}) {

    const { adicionar } = useContext(CartContext)
    
    const itemprecoBRL = produtos.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        
        
        
        <li className='item-produtos'>
        
        <img alt='imagem do produto' src={produtos.img}></img>
        <h2>{produtos.nome}</h2>
        <span>{itemprecoBRL}</span>
        <div className='div-sabor'>
        <span>Escolha 1 sabor:</span>
        <SelectSabor/>
        </div>
        
        
        
        <button className='botaopadrao' onClick={() => adicionar(produtos)}>ADICIONAR</button>
        </li>
    )
    
}
export default Item