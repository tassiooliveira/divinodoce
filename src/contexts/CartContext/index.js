import { createContext, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    
    
    
    const [carrinho, setCarrinho] = useState([])
    //const [itemcart, setItemcart] = useState([])
    //const [saborescolhido, setSaborescolhido] = useState([])

    const totalmap = carrinho.map(( carrinho ) => carrinho.item)
    const totalPreco = totalmap.reduce((acc, current)=> acc + current.preco,0)
    const totalprecoBRL = totalPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    function adicionar(item) {
        const itemcart = {item}
        setCarrinho([...carrinho,itemcart]) 
    }

    //function setcarrinho(){
    //    setCarrinho([...carrinho,itemcart])
    //    setItemcart(saborescolhido)
    //}

    //function changesabor(e){
    //   setSaborescolhido(e.target.value)
    // }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    

    function finalizar() {
        const mapcarrinho = carrinho.map((carrinho) => `- ${carrinho.item.nome} = R$ ${carrinho.item.preco},00%0A`)
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=✅ *NOVO PEDIDO*%0A -----------------------------------------
       %0A▶ *RESUMO DO PEDIDO*%0A%0A${mapcarrinho.join('')}%0AQuantidade de Itens = ${carrinho.length}%0A-----------------------------------------%0A*TOTAL DO PEDIDO=* ${totalprecoBRL}`)
    }
    
    
    
    return (
     <CartContext.Provider value={{carrinho, adicionar, remover, finalizar, totalprecoBRL}}>{children}</CartContext.Provider>
    )
}