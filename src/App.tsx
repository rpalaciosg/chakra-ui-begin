import './App.css'
import { Box, Stack, VStack, HStack } from '@chakra-ui/react';
 
function App() {

  return (
    <div className='App'>
      {/* <Stack spacing="24px" direction="row"> */}
      {/* <VStack spacing="24px"> */}
      <HStack spacing="24px">
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
      </HStack>
    </div>
  )
}

export default App
