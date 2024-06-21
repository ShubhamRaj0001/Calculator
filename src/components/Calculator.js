// src/components/Calculator.js

import React, { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/roboto';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const CalculatorWrapper = styled.div`
  width: 320px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Display = styled.div`
  background: #222;
  color: white;
  font-size: 2em;
  padding: 20px;
  text-align: right;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
`;

const Button = styled.button`
  background: ${(props) => (props.operation ? '#fa8231' : '#505050')};
  color: white;
  border: none;
  padding: 20px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${(props) => (props.operation ? '#f39c12' : '#666')};
  }
`;

const buttons = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (button) => {
    if (button === 'AC') {
      setInput('');
    } else if (button === '=') {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput('Error');
      }
    } else {
      setInput(input + button);
    }
  };

  return (
    <Container>
      <CalculatorWrapper>
        <Display>{input}</Display>
        <ButtonGrid>
          {buttons.map((button, index) => (
            <Button
              key={index}
              operation={isNaN(button) && button !== '.' && button !== '+/-'}
              onClick={() => handleClick(button === '+/-' ? '-' : button)}
            >
              {button}
            </Button>
          ))}
        </ButtonGrid>
      </CalculatorWrapper>
    </Container>
  );
};

export default Calculator;
