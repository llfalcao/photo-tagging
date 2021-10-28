import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  80% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  min-width: 260px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #5555557d;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px #000;
  background: #1a1a1b;
  color: #fff;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  animation: ${fade} 0.3s;

  @media (min-width: 400px) {
    min-width: 350px;
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.legend`
  position: relative;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  & span {
    position: absolute;
    color: turquoise;
    font-size: 0.6rem;
    display: block;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: transparent;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.5rem 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 0.25rem;

  &:hover {
    border: 2px solid #999;
  }

  &:focus {
    border: 2px solid #287ecf;
  }
`;

export const Error = styled.ul`
  text-align: left;
  font-size: 0.8rem;
  list-style: disc;
  margin: 0.5rem 1rem 1rem;

  & p {
    margin: 0 -0.8rem 0.5rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0.5rem;
  top: 0.2rem;
  font-size: 0.7rem;
  color: #287ecf;
  transition: 0.2s ease all;
  pointer-events: none;
  z-index: 1;

  ${Input}:placeholder-shown:not(:focus) ~ & {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: #999;
  }
`;

export const BtnSubmit = styled.button`
  width: 100%;
  font-weight: 600;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 0 2px #000;
  background: #287ecf;
  color: #ffffffcc;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff33;
    color: #fff;
  }
`;

export const LoadingIcon = styled.svg`
  animation: ${spin} 0.4s infinite linear;
`;

export const MsgSuccess = styled.div`
  margin-top: 1rem;

  & button {
    background: transparent;
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 1px;
    cursor: pointer;
  }
`;

export const BtnCloseMenu = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  width: 20px;
  height: 20px;
  margin: 0 0 4px auto;
  border-radius: 100%;
  background: none;
  fill: crimson;
  cursor: pointer;
`;
