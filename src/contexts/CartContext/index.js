import { createContext, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    
    
    const [carrinho, setCarrinho] = useState([])

    const precototal = carrinho.reduce((acc, current) => acc + current.preço, 0)

    function adicionar(item) {
        const itemcart = {item}
        setCarrinho([...carrinho,itemcart])
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    

    function finalizar() {
        const mapcarrinho = carrinho.map((carrinho) => `- ${carrinho.item.nome} = ${carrinho.item.preço}%0A`)
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=✅ *NOVO PEDIDO*%0A -----------------------------------------
       %0A▶ *RESUMO DO PEDIDO*%0A%0A${mapcarrinho.join('')}%0AQuantidade de Itens = ${carrinho.length}%0A`)
    }
    
    
    
    return (
     <CartContext.Provider value={{carrinho, adicionar, remover, finalizar, precototal}}>{children}</CartContext.Provider>
    )
}