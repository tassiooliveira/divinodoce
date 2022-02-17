import React from 'react'
import Item from '../Item'
import { produtos } from '../../database'
import { useState } from 'react'
import Itemcarrinho from '../Itemcarrinho'




function Produtos() {


    const [carrinho, setCarrinho] = useState([])

    function adicionar(item) {
        const itemcart = {item}
        setCarrinho([...carrinho,itemcart])
        
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    return (
        <>
        <div>
        <h2 className='h2-titulo-ovos'>Ovos de Páscoa</h2>
        </div>
        <div className='produtos-itens'>
        {produtos.map(( produtos, index) => <Item key={index}  produtos={produtos} adicionar={adicionar}/>) }
        {console.log(carrinho)}
        </div>
        <h2 className='h2-titulo-ovos'>Carrinho</h2>
      
        <div className='produtos-itens'>
        {carrinho.map(( carrinho, index) => <Itemcarrinho key={index} remover={remover} itemIndex={index} carrinho={carrinho}/>) }
        
        
        </div>
        </>
        
    )
}

export default Produtos