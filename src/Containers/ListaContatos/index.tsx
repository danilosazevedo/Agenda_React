import * as S from './styles'

type Contatos ={
    id: number,
    phone: number,
    name: string,
    email: string,
}

const ListadeContatos = ({id, phone, name, email }: Contatos) => (
        <S.ListadeContatos>
            <ul>
                <S.li>{name}</S.li>
                <S.li>{phone}</S.li>
                <S.li>{email}</S.li>
                <S.Button>Remover</S.Button>
                <S.Button>Editar</S.Button>
            </ul>
        </S.ListadeContatos>
)

export default ListadeContatos