import { Button, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import InputField from '../../components/InputField/InputField';
import { authIsLoading, login, setIsLoading } from '../../store/auth/slice';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authIsLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    dispatch(setIsLoading(true));
    console.log(isLoading);
    setTimeout(() => {
      dispatch(setIsLoading(false));
      dispatch(login({ email, name, password }));
    }, 1000);
    console.log('not loading');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        isDisabled={isLoading}
        isRequired
        label='Name'
        type='text'
        placeholder='John Doe'
        size='lg'
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <InputField
        isDisabled={isLoading}
        isRequired
        label='Email'
        type='email'
        placeholder='test@test.com'
        size='lg'
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <InputField
        isDisabled={isLoading}
        isRequired
        label='Password'
        type='password'
        placeholder='*******'
        size='lg'
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button
        isLoading={isLoading}
        // variantColor='teal'
        colorScheme='blue'
        // variant='outline'
        type='submit'
        width='full'
        mt={4}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default Login;
