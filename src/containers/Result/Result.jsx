import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { answersPercentageSelector } from '../../store/questions/selectors';
import { resetQuestions } from '../../store/questions/slice';

const Result = () => {

  // Redux 
  const dispatch = useDispatch();
  const percentage = useSelector(answersPercentageSelector);

  // router navigate
  const navigate = useNavigate();

  // handlers
  const onClickHandler = () => {
    navigate('/exam');
    dispatch(resetQuestions());
  };


  //JSX
  return (
    <Flex justify='center' direction='column' align='center' gap={5} p={4}>
      <Heading fontSize='2xl'>Your Score</Heading>
      <Text fontSize='3xl'>{percentage}%</Text>
      <Button onClick={onClickHandler}>Try Again</Button>
    </Flex>
  );
};

export default Result;
