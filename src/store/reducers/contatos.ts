import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/contatos'

export type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            phone: '84994894269',
            name: "Beltrano da Silva",
            email: "danilo-sa@live.com"
        },
        {
            id: 2,
            phone: '84991695050',
            name: "Fulano da Silva",
            email: "danilo-sa@live.com"
        },
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            state.itens = state.itens.filter((contato) => contato.name !== action.payload.name)
        },
        adicionar: (state, action: PayloadAction<Contato>) => {
            const dadosDoNovoContato = {
                ...action.payload
            }
            state.itens.push(dadosDoNovoContato)
        }
    }
})

export const { remover, adicionar } = contatosSlice.actions
export default contatosSlice.reducer