import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/contatos'

export type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens:[
        {
            id: 1,
            phone: 84994894269,
            name: "Danilo Azevedo",
            email: "danilo-sa@live.com"
        },
        {
            id: 2,
            phone: 8491695050,
            name: "Fulano da Silva",
            email: "danilo-sa@live.com"
        },
        {
            id: 3,
            phone: 84991458789,
            name: "Beltrano Costa",
            email: "danilo-sa@live.com"
        },
        {
            id: 4,
            phone: 32472017,
            name: "Sicrano Medeiros",
            email: "danilo-sa@live.com"
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        }
    }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer