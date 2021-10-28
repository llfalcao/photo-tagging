import styled from 'styled-components';

export const Header = styled.header`
  background: #101112;
  color: #fff;
  display: flex;

  padding: 1rem 0;
  filter: drop-shadow(0 0 4px #000);
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
  cursor: pointer;

  & img {
    width: 20px;
    vertical-align: top;
    margin-right: 0.5rem;
  }
`;
