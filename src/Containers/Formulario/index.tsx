import * as S from './styles'

import { IMaskInput } from "react-imask"

import { useDispatch, useSelector } from 'react-redux'
import { useState, FormEvent, useEffect } from 'react'

import { adicionar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'


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
                id: phone
            }))

        setName('')
        setPhone('')
        setEmail('')
    }

    const editar = useSelector((state: RootReducer) => state.contatos.edit)

    return (
        editar.length > 0 ? <>
            <S.FormArea onSubmit={cadastrarContato}>
                {editar.map(contato =>
                    <>
                        <S.Title>Editando {contato.name}</S.Title>
                        <S.Span>{`Nome: ${contato.name}`}</S.Span>
                        < S.InputsEdit
                            key={contato.id}
                            type="text" placeholder='Novo Nome' defaultValue={name}
                            onChange={(evento) => setName(evento.target.value)} required
                        />
                        <S.Span>{`Telefone: ${contato.phone}`}</S.Span>
                        <S.InputsEdit
                            key={contato.id}
                            type="tel" placeholder='Novo Telefone (XX) XXXXX-XXXX' defaultValue={phone}
                            onChange={(evento) => setPhone(evento.target.value)} required
                        />
                        <S.Span>{`Email: ${contato.email}`}</S.Span>
                        <S.InputsEdit
                            key={contato.id}
                            type="email" placeholder='Novo E-mail example@example.com' defaultValue={email}
                            onChange={(evento) => setEmail(evento.target.value)} required
                        />
                    </>
                )}
                <S.Botao type="submit">Salvar</S.Botao>
            </S.FormArea>
        </>
            :
            <S.FormArea onSubmit={cadastrarContato}>
                <h2>Novo Contato</h2>
                <S.Inputs
                    type="text" placeholder='Nome' value={name}
                    onChange={(evento) => setName(evento.target.value)} required
                />
                <S.Inputs
                    type="tel" placeholder='Telefone (XX) XXXXX-XXXX' value={phone}
                    onChange={(evento) => setPhone(evento.target.value)} required
                />
                <S.Inputs
                    type="email" placeholder='E-mail example@example.com' value={email}
                    onChange={(evento) => setEmail(evento.target.value)} required
                />
                <S.Botao type="submit">Cadastrar</S.Botao>
            </S.FormArea>
    )
}


export default Formulario