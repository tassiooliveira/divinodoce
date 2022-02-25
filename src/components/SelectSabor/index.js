import { list } from '../../database'
import React from 'react';



function SelectSabor() {
  
  return (    
    <>
    <select id='select-list' name="select">
        {list.map(( list, index ) => <option  key={index} value={list.sabor} >{list.sabor}</option>)}
    </select>


    
    </>
    
       
      
  )
}

export default SelectSabor;