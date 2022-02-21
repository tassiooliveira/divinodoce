import { createContext, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    
    
    const [carrinho, setCarrinho] = useState([])

    function adicionar(item) {
        const itemcart = {item}
        setCarrinho([...carrinho,itemcart])
        
        
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    function finalizar() {
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=*Novo Pedido*%0AQuantidade de Itens= ${carrinho.length}`)
    }
    
    
    
    return (
     <CartContext.Provider value={{carrinho, adicionar, remover, finalizar}}>{children}</CartContext.Provider>
    )
}