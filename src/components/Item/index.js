import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';





function Item({produtos}) {

    const { onclickitem, adicionar } = useContext(CartContext)
    
    // const itemprecoBRL = produtos.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        
        
        
        <li onClick={() => onclickitem(produtos)} className='item-produtos'>
        
        <img alt='imagem do produto' src={produtos.img}></img>
        <h2>{produtos.nome}</h2>
        <div className='div-sabor'>
        <h5>TAMANHOS</h5>
        <span>PP</span>
        <span>P</span>
        <span>M</span>
        <span>G</span>
        <span>GG</span>
        </div>
        <button className='botaopadrao' onClick={() => adicionar(produtos)} > Adicionar </button>
        </li>
    )
    
}
export default Item