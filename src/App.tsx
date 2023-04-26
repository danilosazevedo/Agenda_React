import BarraLateral from "./Containers/Header";
import Formulario from "./Containers/Formulario";
import ListadeContatos from "./Containers/ListaContatos";
import EstiloGlobal, { Container } from "./Styles/global";
import {useEffect, useState } from "react";


const repositorio = [
  {
    id: 1,
    phone: 84994894269,
    name: "Danilo Azevedo",
    email: "danilo-sa@live.com"
  },
  {
    id: 2,
    phone: 8491695050,
    name: "Fulano da Silva",
    email: "danilo-sa@live.com"
  },
  {
    id: 3,
    phone: 84991458789,
    name: "Beltrano Costa",
    email: "danilo-sa@live.com"
  },
  {
    id: 4,
    phone: 32472017,
    name: "Sicrano Medeiros",
    email: "danilo-sa@live.com"
  }
]

const App = () => {
  const [contatos, setContatos] = useState([{
      id: 4,
      phone: 32472017,
      name: "Sicrano Medeiros",
      email: "danilo-sa@live.com"
  }])
  
  const exibeContatos = () => {
    const items = repositorio
    setContatos(items)
  }
  
useEffect(() => {
  exibeContatos()
}, [])

  return (
<>
<EstiloGlobal/>
<Container>
<BarraLateral/>
<Formulario/>
{contatos.map(({ id, phone, name, email }) => (
          <ListadeContatos
          key={id}
          id={id}
          name={name}
          phone={phone}
          email={email}
          />
        ))}
</Container>
</>
  )
}

export default App
