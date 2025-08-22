import { Link } from 'react-router-dom'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  background: 'gray' | 'black'
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  background,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 95) + '...'
    }

    return descricao
  }

  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <S.Card background={background}>
        <img src={image} alt={title} />
        <S.Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </S.Infos>
        <S.Titulo>{title}</S.Titulo>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <S.Descricao>{getDescricao(description)}</S.Descricao>
      </S.Card>
    </Link>
  )
}

export default Product
