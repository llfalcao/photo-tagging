import styled from 'styled-components';

export const Header = styled.header`
  background: #101112;
  color: #fff;
  display: flex;
  padding: 1rem;
  filter: drop-shadow(0 0 4px #000);
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    & h1 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;

  & img {
    width: 20px;
    vertical-align: top;
    margin-right: 0.5rem;
  }

  @media (max-width: 500px) {
    margin: 0 0.5rem 1rem;
  }
`;
