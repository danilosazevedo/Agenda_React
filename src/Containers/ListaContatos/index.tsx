import * as S from './styles'

import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { RootReducer } from '../../store'

import Contatos, { remover } from '../../store/reducers/contatos'
import { useEffect, useState } from 'react'


type Props = {
    id: number,
    phone: number,
    name: string,
    email: string,
}

const ContactList = () => {
const dispatch = useDispatch()


    const { itens } = useSelector((state: RootReducer) => state.contatos)
    console.log(itens)

    return (
        <S.ListadeContatos>
            <ul>
                {itens.map((c) => (
                    <S.li key={c.name}>
                        <Contact
                            id={c.id}
                            name={c.name}
                            phone={c.phone}
                            email={c.email}
                        />
                    </S.li>
                ))}
                <S.Button>Editar</S.Button>
                <S.Button onClick={() => dispatch(remover)}>Remover</S.Button>
            </ul>
        </S.ListadeContatos>
    )
}


export default ContactList