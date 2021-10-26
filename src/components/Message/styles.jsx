import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Modal = styled.p`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px #000;
  color: #fff;
  animation: ${fade} 0.5s 1.5s ease forwards;
`;

export const MsgCorrect = styled(Modal)`
  background: green;
`;

export const MsgIncorrect = styled(Modal)`
  background: crimson;
`;
