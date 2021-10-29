import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 19vh;
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  border-radius: 0.5rem;
  background: #101112;
  color: #eee;
  padding: 1rem;
  box-shadow: 0 0 5px #000;
  animation: ${slide} 0.3s forwards;

  & p {
    margin: 0.5rem 0;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  background: #222;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const CharacterItem = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 64px;

  & img {
    filter: drop-shadow(0 4px 2px #000);
  }
`;

export const BtnCloseMenu = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 20px;
  height: 20px;
  margin: 0 0 4px auto;
  border-radius: 100%;
  background: none;
  fill: crimson;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
