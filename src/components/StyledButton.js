import styled from 'styled-components';

export const Button = styled.button`
  height: 5rem;
  width: 18rem;
  
  background-color: #3c415e;
  border-radius: .5rem;
  border-color: #738598;
  outline: none;
  margin: 1rem;

  text-align: center;
  font-size: 2rem;
  font-family: inherit;
  color: inherit;

  transition: background-color .2s;

  &:hover {
    background-color: #738598;
    cursor: pointer;
  }
`;