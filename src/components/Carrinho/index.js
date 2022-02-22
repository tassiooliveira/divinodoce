import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Itemcarrinho from '../Itemcarrinho'



function Carrinho() {

  const { carrinho, finalizar, precototal } = useContext(CartContext)

  const botaofinalizar = (carrinho.length>0) ? 'button-finalizar' : 'button-finalizar-oculto'
  const titulocarrinho = (carrinho.length>0) ? 'Carrinho' : 'Seu carrinho está vazio'


  return (
    <>

  <h2 className="h2-titulo-ovos">{titulocarrinho} ({carrinho.length})</h2>
      
      <div className='carrinho-itens-div'>
      {carrinho.map(( carrinho, index) => <Itemcarrinho key={index}  itemIndex={index} carrinho={carrinho}/>) }
      
      </div>
      <div className='div-finalizar'>
      <button onClick={finalizar} className={botaofinalizar} >Finalizar R$</button>
      </div>
      {console.log(precototal)}
    </>
    
      
  );
}

export default Carrinho;