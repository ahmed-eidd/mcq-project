import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  authIsLoggedInSelector,
  authUserSelector,
} from '../../store/auth/selectors';

const Nav = () => {
  
  // Redux
  const user = useSelector(authUserSelector);
  const isUserLoggedIn = useSelector(authIsLoggedInSelector);

  // chakra ui hooks to change from light to dark and vise versa
  const { colorMode, toggleColorMode } = useColorMode();

  // JSX
  return (
    <Flex justify='space-between' align='center'>
      <Heading fontSize='xl'>Welcome {isUserLoggedIn ? user.name : ''}</Heading>
      <Button
        leftIcon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode}
      </Button>
    </Flex>
  );
};

export default Nav;
