import React from 'react'
import Item from '../Item'
import { produtos } from '../../database'
import { useState } from 'react'
import Itemcarrinho from '../Itemcarrinho'




function Produtos() {

    const [carrinho, setCarrinho] = useState([])
    const [texto, setTexto] = useState([])

    function adicionar(item) {
        const itemcart = {item}
        setCarrinho([...carrinho,itemcart])
        setTexto(carrinho.length+1)
        
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    function setartexto(){
        
    }

    function finalizar() {
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=Quantidade de Itens= ${texto}`)
    }

    const contadorcart = carrinho.length>0 ? carrinho.length : ''

    const botaofinalizar = (carrinho.length>0) ? 'button-finalizar' : 'button-finalizar-oculto'
    const nomecarrinho = (carrinho.length>0) ? 'produtos-itens-div' : 'produtos-itens-div-oculto'

    return (
        <>
        <div>
        <h2 className='h2-titulo-ovos'>Ovos de Páscoa</h2>
        </div>
        <div className='produtos-itens-div'>
        {produtos.map(( produtos, index) => <Item key={index} produtos={produtos} adicionar={adicionar}/>) }
        </div>

        <h2 className='produtos-itens-div'>Carrinho<span>{contadorcart}</span></h2>
      
        <div className='carrinho-itens-div'>
        {carrinho.map(( carrinho, index) => <Itemcarrinho key={index}  remover={remover} itemIndex={index} carrinho={carrinho}/>) }
        
        </div>
        <div className='div-finalizar'>
        <button onClick={finalizar} className={botaofinalizar} >Finalizar</button>
        </div>
        
        </>
        
    )
}

export default Produtos