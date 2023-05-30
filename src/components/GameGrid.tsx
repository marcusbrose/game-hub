import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames()
  const skeletons = [...Array(6)]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={3}>
        {isLoading && skeletons.map((_, index) =>
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>)}
        {games.map((game) =>
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid