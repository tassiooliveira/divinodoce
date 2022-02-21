import React from 'react'
import { list } from '../../database'
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