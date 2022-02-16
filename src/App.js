import './App.css';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom'
import PgCarrinho from './components/Carrinho/index'
import PgProdutos from './components/Produtos/index'
import Carrinho from './components/Carrinho/index';
import Produtos from './components/Produtos/index';



function App() {
  return (
   <>

      <Nav />
    
      <Switch>
      <Route exact path='/' component={PgProdutos}/>
      <Route exact path='/carrinho' component={PgCarrinho}/>
        
      </Switch>
   

   </>
  );
}

export default App;
