import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Itemcarrinho from '../Itemcarrinho'



function Carrinho() {

  const { carrinho, finalizar, totalprecoBRL} = useContext(CartContext)

  const divfinalizar = (carrinho.length>0) ? 'div-geral-finalizar' : 'div-geral-finalizar-oculto'
  const titulocarrinho = (carrinho.length>0) ? 'Carrinho' : 'Seu carrinho está vazio'
  


  return (
    <>

  <h2 className="h2-titulo-ovos">{titulocarrinho} ({carrinho.length})</h2>
      
      <div className='carrinho-itens-div'>
      {carrinho.map(( carrinho, index) =>  <Itemcarrinho key={index} itemIndex={index} carrinho={carrinho}/>) }
      
      </div>
      <div className={divfinalizar}>
      <div className='div-finalizar'>
      <span>Total do Pedido= {totalprecoBRL}</span>
      <button onClick={finalizar} className='botaopadrao'>PROSSEGUIR</button>
      </div>
      </div>
      
    </>
    
      
  );
}

export default Carrinho;