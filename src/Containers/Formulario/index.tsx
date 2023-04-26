import * as S from './styles'

import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'

const Formulario = () => (
    <S.FormArea>
        <h2>Novo Contato</h2>
        <S.Inputs type="text" placeholder='Nome' />
        <S.Inputs type="tel" placeholder='Telefone' />
        <S.Inputs type="email" placeholder='E-mail' />
        <S.Botao type="submit">Cadastrar</S.Botao>
    </S.FormArea>
)

export default Formulario