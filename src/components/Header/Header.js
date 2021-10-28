import Scoreboard from '../Scoreboard';
import * as S from './styles';

const Header = ({ score }) => {
  return (
    <S.Header id="header">
      <h1>
        <a href="/">Hidden5</a>
      </h1>
      <S.NavContainer>
        <S.NavItem>How to play</S.NavItem>
        <S.NavItem>Leaderboards</S.NavItem>
        <S.NavItem>
          <a
            href="https://github.com/llfalcao/photo-tagging"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </S.NavItem>
      </S.NavContainer>
      <Scoreboard current={score.current} max={score.max} />
    </S.Header>
  );
};

export default Header;
