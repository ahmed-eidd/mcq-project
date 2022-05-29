import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio as ChakraRadio,
  RadioGroup as ChakraRadioGroup,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  allQuestionsSelector,
  currentQuestionSelector,
} from '../../store/questions/selectors';
import {
  addUserAnswer,
  onNextQuestion,
  randomizeQuestions,
} from '../../store/questions/slice';

const Exam = () => {
  const dispatch = useDispatch();

  // local state
  const [currentValue, setCurrentValue] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(false);

  // redux selectors
  const allQuestions = useSelector(allQuestionsSelector);
  const currentQuestion = useSelector(currentQuestionSelector);

  // router
  const navigate = useNavigate();

  // handlers
  /**
   * If the answer exists, modify it, otherwise add a new one.
   */
  const onAnswerChange = (answer, questionName) => {
    let answerId = answers.findIndex((ans) => ans.question === answer.question);
    if (answerId !== -1) {
      let newAnswers = [...answers];
      newAnswers[answerId] = answer;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { ...answer, question: questionName }]);
    }
  };

  /**
   * If the current question is not the last question, then go to the next question.
   */
  const onNextHandler = () => {
    if (!currentValue) {
      setError(true);
      return;
    }
    setError(false);
    if (currentQuestion === allQuestions.length - 1) {
      navigate('/result');
      dispatch(addUserAnswer(answers));
      console.log('finished');
      return;
    }
    dispatch(onNextQuestion());
    setCurrentValue('');
  };

  // useEffect to randomize the questions each time on mount
  useEffect(() => {
    dispatch(randomizeQuestions());
  }, [dispatch]);

  //JSX
  return (
    /* A component that is used to wrap other components. It is used to apply styles to the wrapped
    components. */
    <Box>
      <Text color='blue.200' as='u'>showing the correct answers for demo purposes</Text>
      <Text my={4}>{currentQuestion + 1 + ' / ' + allQuestions.length}</Text>
      <Heading fontSize='lg'>{allQuestions[currentQuestion].title}</Heading>
      <ChakraRadioGroup
        onChange={(val) => {
          setCurrentValue(val);
        }}
        value={currentValue}
      >
        <Flex justify='flex-start' gridGap='4' p={4} direction='column'>
          {allQuestions[currentQuestion].answers.map((ans) => {
            return (
              <ChakraRadio
                style={{
                  _label: {
                    color: 'red.500',
                  },
                }}
                onChange={() =>
                  onAnswerChange(ans, allQuestions[currentQuestion].title)
                }
                size='lg'
                key={ans.title}
                value={ans.title}
              >
                {`${ans.title} ${ans.isCorrect ? '(Correct)' : '(Incorrect)'}`}
              </ChakraRadio>
            );
          })}
        </Flex>
      </ChakraRadioGroup>

      <Button
        colorScheme='blue'
        rightIcon={<ChevronRightIcon />}
        onClick={onNextHandler}
        mt={4}
      >
        Next
      </Button>

      {/* Error Message */}
      {error && (
        <Text mt={4} color='red.500'>
          Please select an answer
        </Text>
      )}
    </Box>
  );
};

export default Exam;
