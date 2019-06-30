import React from 'react';
import { StyledResetButton } from './StyledResetButton';

function ResetButton({ reset }) {

  return (
    <StyledResetButton onClick={() => reset()}>Reset</StyledResetButton>
  );
}

export default ResetButton;
