import styled from 'styled-components';

export const MenuContainer = styled.ul`
  position: absolute;
  background: #e5e5e5;
  color: #000000;
  padding: 4px;
  border: 1px solid #111;
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #d5d5d5;
  }
`;

export const BtnCloseMenu = styled.button`
  width: 20px;
  height: 20px;
  padding-top: 1px;
  margin: 0 0 0.5rem auto;
  background: #111;
  color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
