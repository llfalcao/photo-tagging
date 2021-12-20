import Scoreboard from '../Scoreboard';
import * as S from './styles';
import help from '../../assets/icons/help.png';
import leaderboard from '../../assets/icons/leaderboard.png';
import github from '../../assets/icons/github.png';

const Header = ({ score, toggleHowToPlay, toggleLeaderboard }) => {
  return (
    <S.Header id="header">
      <h1>
        <a href="/photo-tagging">Hidden5</a>
      </h1>
      <S.NavContainer>
        <S.NavItem onClick={toggleHowToPlay}>
          <img src={help} alt="How to play" />
          How to play
        </S.NavItem>
        <S.NavItem onClick={toggleLeaderboard}>
          <img src={leaderboard} alt="Leaderboards" />
          Leaderboards
        </S.NavItem>
        <S.NavItem>
          <a
            href="https://github.com/llfalcao/photo-tagging"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub - llfalcao" />
            GitHub
          </a>
        </S.NavItem>
      </S.NavContainer>
      <Scoreboard current={score.current} max={score.max} />
    </S.Header>
  );
};

export default Header;
