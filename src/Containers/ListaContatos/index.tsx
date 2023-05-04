import * as S from './styles'

import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { RootReducer } from '../../store'

import { remover, editar } from '../../store/reducers/contatos'


const ContactList = () => {

    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const editando = useSelector((state: RootReducer) => state.contatos.edit)
    const emEdicao = editando.length
    return (
        <>
            {emEdicao > 0 ? '' : <S.ListadeContatos>
                <ul>
                    {itens.map(contato =>
                        <S.li key={contato.id}>
                            <S.p>Nome: {contato.name}</S.p>
                            <S.p>Telefone: {contato.phone}</S.p>
                            <S.p>Email: {contato.email}</S.p>
                            <S.ButtonEdit onClick={() => dispatch(editar(contato))}>Editar</S.ButtonEdit>
                            <S.ButtonRemove onClick={() => dispatch(remover(contato))}>Remover</S.ButtonRemove>
                        </S.li>)}
                </ul>
            </S.ListadeContatos>}

        </>
    )
}


export default ContactList