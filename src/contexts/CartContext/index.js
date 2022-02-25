import { createContext, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    
    
    
    const [carrinho, setCarrinho] = useState([])
    const [saborescolhido, setSaborescolhido] = useState()

    const totalPreco = carrinho.reduce((acc, current)=> acc + current.preco,0)
    const totalprecoBRL = totalPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    function adicionar(item) {
        
        const itemcart = { nome: item.nome,
        preco: item.preco,
        img: item.img,
        quantidade: item.quantidade,
        sabor: saborescolhido}
        setCarrinho([...carrinho,itemcart]) 
    }


    function changesabor(e){
       setSaborescolhido(e.target.value)
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    

    function finalizar() {
        const mapcarrinho = carrinho.map((carrinho) => `- ${carrinho.nome}(${carrinho.sabor}) = R$ ${carrinho.preco},00%0A`)
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=✅ *NOVO PEDIDO*%0A -----------------------------------------
       %0A▶ *RESUMO DO PEDIDO*%0A%0A${mapcarrinho.join('')}%0AQuantidade de Itens = ${carrinho.length}%0A-----------------------------------------%0A*TOTAL DO PEDIDO=* ${totalprecoBRL}`)
    }
    
    
    
    return (
     <CartContext.Provider value={{carrinho, adicionar, remover, finalizar, totalprecoBRL, changesabor}}>{children}</CartContext.Provider>
    )
}