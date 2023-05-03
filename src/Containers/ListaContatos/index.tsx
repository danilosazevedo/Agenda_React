import * as S from './styles'

import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { RootReducer } from '../../store'

import { remover } from '../../store/reducers/contatos'


const ContactList = () => {
    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return (
        <S.ListadeContatos>
            <ul>
                {itens.map(contato =>
                    <S.li key={contato.id}>
                        <p>Nome: {contato.name}</p>
                        <p>Telefone: {contato.phone}</p>
                        <p>Email: {contato.email}</p>
                        <S.Button>Editar</S.Button>
                        <S.Button onClick={() => dispatch(remover(contato))}>Remover</S.Button>
                    </S.li>)}
            </ul>
        </S.ListadeContatos>
    )
}


export default ContactList