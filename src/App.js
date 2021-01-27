import React from 'react'
import { ChakraProvider, Flex, Link, Stack } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Flex flexDirection="column">
      <Flex backgroundColor="#141414">
        <Flex justifyContent="flex-start">
          <Link color="whiteAlpha.500">Lizeth</Link>
        </Flex>
        <Stack
          spacing={10}
          isInline
          justifyContent="space-between"
          alignItems="center"
        >
          <Link color="whiteAlpha.500">Contact</Link>
          <Link color="whiteAlpha.500">Projects</Link>
          <Link color="whiteAlpha.500">About</Link>
        </Stack>
      </Flex>
      <Flex flexDirection="row" backgroundColor="#141414" height={130} />
    </Flex>
  </ChakraProvider>
)

export default App
