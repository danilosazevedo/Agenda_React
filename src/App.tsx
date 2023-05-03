import BarraLateral from "./Containers/Header";
import Formulario from "./Containers/Formulario";
import EstiloGlobal, { Container } from "./Styles/global";
import { Provider, useSelector } from "react-redux";

import store from './store'
import ContactList from "./Containers/ListaContatos";




const App = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Formulario />
        <ContactList/>
      </Container>
    </Provider>
  )
}

export default App
