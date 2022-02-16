import React from 'react'
import { produtos } from '../../database'



function Item({ nome, preço , quantidade , imagem, sabores}) {
    
    const selectlist = document.getElementById("select-list");
    const option = ''
    return (
        
        
        <li>
        <h2>{nome}</h2>
        <img alt='imagem do produto' src={imagem}></img>
        <span>{preço}</span>
        <select id='select-list' name="select">
        <option value="valor1" >Escolha um Sabor</option>
        <option value="valor2" >Ninho com Nutella</option>
        <option value="valor3">M&M</option>
        
        </select>
        
        <button>ADICIONAR</button>
        </li>
    )
    
}
export default Item