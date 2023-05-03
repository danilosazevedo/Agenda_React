import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'


const BarraLateral = () => {

    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return(
    <S.Header>
        <h1>Lista de Contatos ({itens.length})</h1>
    </S.Header>
    )
}

export default BarraLateral