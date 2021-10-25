import styled from 'styled-components';

export const MenuContainer = styled.ul`
  position: absolute;
  margin: 5px 0 0 5px;
  padding: 4px;
  border: 1px solid #111;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #000;
  background: #1a1a1b;
  color: #e5e5e5;
  z-index: 1;
`;

export const MenuItem = styled.li`
  padding: 0.1rem 0.5rem;
  margin: 0.1rem 0;
  border-radius: 0.2rem;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #2d3033;
  }

  & img,
  span {
    display: inline-block;
    vertical-align: middle;
  }

  & img {
    width: 32px;
    height: 32px;
  }

  & span {
    margin: 0 0.5rem;
  }
`;

export const BtnCloseMenu = styled.button`
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
