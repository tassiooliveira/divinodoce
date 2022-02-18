import React from 'react'

import imagem from '../../database/download.jpg'
import SelectSabor from '../SelectSabor'


function Item({  produtos, adicionar}) {
    
    return (
        
        
        <li className='item-produtos'>
        
        <img alt='imagem do produto' src={imagem}></img>
        <h2>{produtos.nome}</h2>
        <span>{produtos.preço}</span>
        <span>Escolha 1 sabor:</span>
        <SelectSabor/>
        
        <button onClick={() => adicionar(produtos)}>ADICIONAR</button>
        
        </li>
    )
    
}
export default Item