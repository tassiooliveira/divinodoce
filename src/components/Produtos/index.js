import Item from '../Item'
import { produtos } from '../../database'
import Modalitem from '../Modalitem'






function Produtos() {


    return (
        <>
        
        <div>
        <h2 className='h2-titulo-ovos'>Ovos de Páscoa</h2>
        </div>
        <div className='produtos-itens-div'>
        {produtos.map(( produtos, index) => <Item key={index} produtos={produtos}/>) }
        </div>
        {/* <Modalitem produtos={produtos}/> */}
        </>
        
    )
}

export default Produtos