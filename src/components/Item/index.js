import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { list } from '../../database'




function Item({produtos}) {

    const {  adicionar} = useContext(CartContext)
    
     const itemprecoBRL = produtos.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        
        
        
        <li  className='item-produtos'>
        
        <img alt='imagem do produto' src={produtos.img}></img>
        <h2>{produtos.nome}</h2>
        <div className='div-sabor'>
        <h4>{itemprecoBRL}</h4>
        </div>
        <span>Escolha o sabor:</span>
        <select onChange={onchange} id={produtos.id} name="select">
        {list.map((sabor, index) => <option  key={index} value={sabor.sabor}>{sabor.sabor}</option> )}
        </select>
        <button className='botaopadrao'  onClick={() => adicionar(produtos)} > Adicionar </button>
        </li>
    )
    
}
export default Item