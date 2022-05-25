import { Box, Container, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Login from './containers/Login/Login';

const App = () => {
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
      <Container maxW='container.xl' borderRadius='md' bg='white' minH='md'>
        <Layout />
      </Container>
    </Flex>
  );
};

export default App;
