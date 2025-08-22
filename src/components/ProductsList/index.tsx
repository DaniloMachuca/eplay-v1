import Product from '../Product'
import * as S from './styles'
import Section from '../Section'
import type { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (prices = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(prices)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Section title={title} background={background}>
      <S.List>
        {games.map((game) => {
          return (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
                background={background}
              />
            </li>
          )
        })}
      </S.List>
    </Section>
  )
}

export default ProductsList
