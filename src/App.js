import './App.css';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom'
import PgCarrinho from './components/Carrinho/index'
import PgProdutos from './components/Produtos/index'
import { CartProvider } from './contexts/CartContext';




function App() {
  return (
   <>
      <CartProvider>
      <Nav />
      <main>
        
    
      <Switch>
      <Route exact path='/' component={PgProdutos}/>
      <Route exact path='/carrinho' component={PgCarrinho}/>
        
      </Switch>
      </main>
      </CartProvider>
      
        
      
   

   </>
  );
}

export default App;
