import styled from 'styled-components';

export const StyledProcessing = styled.div`
  height: 5rem;
  width: 100%;

  text-align: center;
  font-size: 2.4rem;
  font-family: inherit;
  color: inherit;

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }

  /* Animate the gear emote */
  & span {
    display: inline-block;
    font-size: 3.4rem;
    animation: spin 2s infinite linear;
  }
`;