import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'


const BarraLateral = () => {

    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const editando = useSelector((state: RootReducer) => state.contatos.edit)

    return(
    <S.Header>
        <h1>Lista de Contatos ({itens.length+editando.length})</h1>
    </S.Header>
    )
}

export default BarraLateral