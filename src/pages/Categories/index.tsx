import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    !actionGames ||
    !sportsGames ||
    !simulationGames ||
    !fightGames ||
    !rpgGames
  ) {
    return <h4>carregando...</h4>
  }

  return (
    <>
      <ProductsList
        games={actionGames}
        id="action"
        title="Ação"
        background="black"
      />
      <ProductsList
        games={sportsGames}
        id="sports"
        title="Esportes"
        background="gray"
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
      />
      <ProductsList id="rpg" games={rpgGames} title="RPG" background="black" />
    </>
  )
}

export default Categories
