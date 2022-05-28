import {
  Box,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import AppRoutes from '../../Routes/Routes';
import Nav from '../Nav/Nav';

const Layout = () => {

  const backgroundColorMode = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
      height='100vh'
      width='full'
      align='center'
      justifyContent='center'
    >
      <Container
        boxShadow='xl'
        maxW='xl'
        borderRadius='md'
        bg={backgroundColorMode}
        // minH='md'
        p={6}
      >
        <Box>
          <Nav />
          <AppRoutes />
        </Box>
      </Container>
    </Flex>
  );
};

export default Layout;
