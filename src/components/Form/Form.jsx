import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
