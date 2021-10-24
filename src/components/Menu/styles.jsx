import styled from 'styled-components';

export const MenuContainer = styled.ul`
  position: absolute;
  padding: 4px;
  border: 1px solid #111;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #000;
  background: #e5e5e5;
  color: #000000;
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #bbb;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #d5d5d5;
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
  margin: 0 0 2px auto;
  padding-top: 1px;
  border-radius: 100%;
  background: #111;
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
