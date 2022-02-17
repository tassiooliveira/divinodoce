import React from 'react';
import { carrinho } from '../../database';
import Itemcarrinho from '../Itemcarrinho';



function Carrinho() {
  return (
    <>

    <h2 className='h2-titulo-ovos'>Carrinho</h2>
      
    <div className='produtos-itens'>
        {carrinho.map(( carrinho, index) => <Itemcarrinho key={index}  carrinho={carrinho}/>) }
        
        
   </div>
    </>
    
      
  );
}

export default Carrinho;