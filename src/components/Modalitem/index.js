// import React, { useContext } from 'react';
// import { CartContext } from '../../contexts/CartContext';
// import { produtos } from '../../database'


// function Modalitem({produtos}) {

//     const { fecharmodalitem, modalitem, indexitem, adicionar} = useContext(CartContext)

//   return (
//     <>
//     <div id="myModalitem " className={modalitem}>
  
//     <div className="modal-contentitem">
//       <span onClick={fecharmodalitem} className="closeitem">&times;</span>
//       <div className='div-modalitem'>
//       <h2>{produtos[indexitem].nome}</h2>
//       <img alt='imagem do produto' src={produtos[indexitem].img}></img>
//       <input onClick={() => adicionar(produtos)} type="checkbox"  name="PP" id="checkbox"/>
//       </div>
//     </div>
//   </div>
//   </>
//   )
// }

// export default Modalitem;