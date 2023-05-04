import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/contatos'

export type ContatosState = {
    itens: Contato[],
    edit: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: '8432472017',
            phone: '8432472017',
            name: "Beltrano da Silva",
            email: "danilo-sa@live.com"
        },
        {
            id: '8432472214',
            phone: '8432472214',
            name: "Fulano da Silva",
            email: "danilo-sa@live.com"
        },
    ],
    edit: []
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Contato>) => {
            state.itens = state.itens.filter((contato) => contato.name !== action.payload.name)
        },
        adicionar: (state, action: PayloadAction<Contato>) => {
            const dadosDoNovoContato = {
                ...action.payload
            }
            if (state.itens.find((contato) => contato.id === dadosDoNovoContato.id)) {
                alert('Este contato já consta em sua lista, altere ou exclua')
            } else {
                state.itens.push(dadosDoNovoContato)
                state.edit.pop()
            }
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const dadosDoContato = {
                ...action.payload
            }
            state.edit.push(dadosDoContato)
            state.itens = state.itens.filter((contato) => contato.name !== action.payload.name)
        }
    }
})

export const { remover, adicionar, editar } = contatosSlice.actions
export default contatosSlice.reducer