import './App.css'
import { Box, Text } from '@chakra-ui/react';
 
function App() {

  return (
    <div className='App'>
      <Box bg="green" h="300px" w="300px" margin="auto" mt="32px">
      <Text fontSize="32px">
        Esta es un Box component de chakra-ui,
        otro texto en bloque.
      </Text>
      </Box>
    </div>
  )
}

export default App
