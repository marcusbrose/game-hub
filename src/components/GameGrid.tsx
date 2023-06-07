import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery)
  const skeletons = [...Array(6)]

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={2} spacing={6}>
      {isLoading && skeletons.map((_, index) =>
        <GameCardContainer key={index}>
          <GameCardSkeleton />
        </GameCardContainer>)}
      {games.map((game) =>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>)}
    </SimpleGrid>
  )
}

export default GameGrid