import styled from 'styled-components';

///////////////////////////////
// Main App Content Wrapper //
/////////////////////////////
export const ContentWrapper = styled.main`
  height: 40rem;
  width: 50rem;
  background-color: #1D1F27;
  border-radius: 2rem;
  /* Absolute Centering */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 25px 50px -12px #1d1919;
  
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;