import React from 'react'
import Item from '../Item'
import { produtos } from '../../database'

function Produtos() {



    return (
        <>
        <div>
            <h2 className='h2-titulo-ovos'>Ovos de Páscoa</h2>
        </div>
        <div className='produtos-itens'>
        {produtos.map(( produtos, index) => <Item key={index} sabores={produtos.sabores} imagem={produtos.imagem} preço={produtos.preço} nome={produtos.nome}/>) }
        
        
        </div>
        
        </>
        
    )
}

export default Produtos