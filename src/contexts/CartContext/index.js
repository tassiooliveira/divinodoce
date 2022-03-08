import { createContext, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    
    const [modal, setModal] = useState('modal-none')
    const [saborescolhido, setSaborescolhido] = useState()
    const [dataescolhida, setDataescolhida] = useState("0")
    const [datanomeescolhida, setDatanomeescolhida] = useState("04/04/2022")
    const [carrinho, setCarrinho] = useState([])
    const totalPreco = carrinho.reduce((acc, current)=> acc + current.preco,0)
    const totalprecoBRL = totalPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})


    function onchange(e){
        setSaborescolhido(e.target.value)
    }

    function onchangedata(e){
        setDataescolhida(e.target.value)
        const dataindex = e.target.value
        if (dataindex === 0 ){
            setDatanomeescolhida("04/04/2022")
        } else if (dataindex === 1) {
            setDatanomeescolhida("05/04/2022")
        }
       
    }
    
    function abrirmodal() {
        setModal('modal')
    }
    function fecharmodal() {
        setModal('modal-none')
    }


    function adicionar(item) {
        const itemcart = { nome: item.nome,
            preco: item.preco,
            img: item.img,
            quantidade: item.quantidade,
            sabor: saborescolhido}
        if (item.quantidade>0) {
            setCarrinho([...carrinho,itemcart]) 
        } else {
            alert('Produto fora do estoque')
        }
        
        
    }

    function remover(clickItemIndex){
        const filteredCart = carrinho.filter( (itemselect) => carrinho.indexOf(itemselect) !== clickItemIndex)
        setCarrinho(filteredCart)
    }

    

    function finalizar() {
        const mapcarrinho = carrinho.map((carrinho) => `- ${carrinho.nome} (${carrinho.sabor}) = ${carrinho.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}%0A`)
       window.open(`https://api.whatsapp.com/send?phone=5579996508340&text=✅ *NOVO PEDIDO*%0A -----------------------------------------
       %0A▶ *RESUMO DO PEDIDO*%0A%0A${mapcarrinho.join('')}%0AQuantidade de Itens = ${carrinho.length}%0A-----------------------------------------%0A*TOTAL DO PEDIDO=* ${totalprecoBRL}%0A*DATA ESCOLHIDA*${datanomeescolhida}`)
    }
    
    
    
    return (
     <CartContext.Provider value={{carrinho, adicionar, remover, finalizar, totalprecoBRL, onchange, modal, abrirmodal, fecharmodal, onchangedata, dataescolhida, datanomeescolhida}}>{children}</CartContext.Provider>
    )
}