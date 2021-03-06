import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { datas } from '../../database'




function Modal() {



  const { fecharmodal, modal, onchangedata, dataescolhida, finalizar} = useContext(CartContext)

  return (
      <>
      <div id="myModal" className={modal}>
    
      <div className="modal-content">
        <span onClick={fecharmodal} className="close">&times;</span>
        <div className='div-modal'>
        <h2>Preencha os dados:</h2>
        <form>
        <span>Data:</span>
        <select onChange={onchangedata} id='select-list' name="select">
        {datas.map((data, index) => <option  key={index} value={index}>{data.data}</option> )}
        </select>
        <select id='select-list' name="select">
        {datas[dataescolhida].horarios.map((horarios, index) => <option  key={index} value={horarios}>{horarios}</option> )}
        </select>
        <button className='botaopadrao' onClick={finalizar}>Confirmar pedido</button>
        
        </form>
        </div>
      </div>
    </div>
    </>
  )
     
   
}

export default Modal;