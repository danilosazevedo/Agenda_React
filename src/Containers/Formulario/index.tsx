import * as S from './styles'

import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'

import { adicionar } from '../../store/reducers/contatos'


const Formulario = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()

        dispatch(
            adicionar({
                phone,
                name,
                email,
                id: 0
            }))

            setName('')
            setPhone('')
            setEmail('')
    }

    return (
        <S.FormArea onSubmit={cadastrarContato}>
            <h2>Novo Contato</h2>
            <S.Inputs
                type="text" placeholder='Nome' value={name}
                onChange={(evento) => setName(evento.target.value)}
            />
            <S.Inputs 
            type="tel" placeholder='Telefone' value={phone}
            onChange={(evento) => setPhone(evento.target.value)}
            />
            <S.Inputs 
            type="email" placeholder='E-mail' value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            />
            <S.Botao type="submit">Cadastrar</S.Botao>
        </S.FormArea>
    )
}


export default Formulario