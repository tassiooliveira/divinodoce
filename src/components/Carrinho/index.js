import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Itemcarrinho from '../Itemcarrinho'
import Modal from '../Modal';



function Carrinho() {

  const { carrinho, abrirmodal, totalprecoBRL} = useContext(CartContext)

  const divfinalizar = (carrinho.length>0) ? 'div-geral-finalizar' : 'div-geral-finalizar-oculto'
  const titulocarrinho = (carrinho.length>0) ? 'Carrinho' : 'Seu carrinho está vazio'
  


  return (
    <div className='carrinho'>
    <Modal/>
    <h2 className="h2-titulo-ovos">{titulocarrinho} ({carrinho.length})</h2>
      
      <div className='carrinho-itens-div'>
      {carrinho.map(( carrinho, index) =>  <Itemcarrinho key={index} itemIndex={index} carrinho={carrinho}/>) }
      
      </div>
      <div className={divfinalizar}>
      <div className='div-finalizar'>
      <span>Total do Pedido= {totalprecoBRL}</span>
      <button onClick={abrirmodal} className='botaopadrao'>PROSSEGUIR</button>
      </div>
      </div>
      
    </div>
    
      
  );
}

export default Carrinho;