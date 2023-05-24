import './App.css'
import { Box, Flex } from '@chakra-ui/react';

function App() {

  return (
    <div className='App'>
      <Flex justify="space-between" align="center">
      <Box bg='green' w='100px' h='200px'>
        Esta es un Box component de chakra-ui
      </Box>
      <Box bg='blue' w='100px' h='200px'>
        Item 2
      </Box>
      <Box bg='red' w='100px' h='200px'>
        Item 3
      </Box>
      <Box bg='tomato' w='100px' h='200px'>
        Item 4
      </Box>
      </Flex>
    </div>
  )
}

export default App
