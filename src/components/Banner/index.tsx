import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game || isLoading) {
    return <h3>carregando...</h3>
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            de <span>{formataPreco(game.prices.old)}R$</span> <br />
            por apenas {formataPreco(game.prices.current)}R$
          </S.Precos>
        </div>
        <Button type="link" title="Comprar" to={`/product/${game.id}`}>
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
