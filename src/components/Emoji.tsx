import { Text, ImageProps } from "@chakra-ui/react"

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const bullsEye = '🎯'
  const thumbsUp = '👍'
  const meh = '😑'

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  }
  return (
    <Text fontSize={emojiMap[rating].boxSize} marginTop={1}>
      {emojiMap[rating].src}
    </Text>
  )
  // <Image {...emojiMap[rating]} boxSize={'25px'} />
}

export default Emoji