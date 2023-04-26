import BarraLateral from "./Containers/Header";
import Formulario from "./Containers/Formulario";
import EstiloGlobal, { Container } from "./Styles/global";
import { Provider, useSelector } from "react-redux";

import store, { RootReducer } from './store'
import ListaDeContatos from "./Containers/ListaContatos";
import ContactList from "./Containers/ListaContatos";



const App = () => {

  
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Formulario />
        <ListaDeContatos/>
      </Container>
    </Provider>
  )
}

export default App
