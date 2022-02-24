import { list } from '../../database'
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';



function SelectSabor() {
  

  const { changesabor } = useContext(CartContext)
 

  return (    
    <>
    <select onChange={changesabor} id='select-list' name="select">
        {list.map(( list, index ) => <option  key={index} value={list.sabor} >{list.sabor}</option>)}
    </select>


    
    </>
    
       
      
  )
}

export default SelectSabor;