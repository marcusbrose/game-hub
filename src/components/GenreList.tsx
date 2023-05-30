import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useData<Genre>('/genres')

  if (error) {
    return null
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <List>
      {genres.map(genre =>
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList