import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputField = ({
  type,
  placeholder,
  onChange,
  isRequired,
  label,
  isDisabled,
  ...props
}) => {
  return (
    <FormControl mt={6} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        isDisabled={isDisabled}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </FormControl>
  );
};

export default InputField;
