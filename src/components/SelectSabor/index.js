import { list } from '../../database'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


  

function SelectSabor() {

  const { onchange } = useContext(CartContext)

  return (    
    <>
    <select onChange={onchange} id='select-list' name="select">
    {list.map((sabor, index) => <option  key={index} value={sabor.sabor}>{sabor.sabor}</option> )}
    </select>
    
    </>
    
       
      
  )
}

export default SelectSabor;