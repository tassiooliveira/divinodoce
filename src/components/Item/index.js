import React from 'react'

import imagem from '../../database/download.jpg'


function Item({ itemIndex, produtos, adicionar, remover}) {
    
    return (
        
        
        <li>
        <h2>{produtos.nome}</h2>
        <img alt='imagem do produto' src={imagem}></img>
        <span>{produtos.preço}</span>
        <select id='select-list' name="select">
        <option value="" >Escolha um Sabor</option>
        <option value="Ninho com Nutella" >Ninho com Nutella</option>
        <option value="M&M">M&M</option>
        
        </select>
        
        <button onClick={() => adicionar(produtos)}>ADICIONAR</button>
        
        </li>
    )
    
}
export default Item