import type { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de R$ {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por R$ {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current ? (
            <Button
              variant="primary"
              type="button"
              title="Adicionar ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          ) : (
            <>
              <Button
                variant="primary"
                type="disabled"
                title="Comprar"
                to={`/product/${game.id}`}
              >
                Não Lançado
              </Button>
            </>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
