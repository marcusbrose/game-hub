import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='1rem'>
      <Image src={logo} boxSize="40px" />
      <Text>Game Hub</Text>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar