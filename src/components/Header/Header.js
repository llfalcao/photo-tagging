import Scoreboard from '../Scoreboard';
import * as S from './styles';

const Header = ({ score }) => {
  return (
    <S.Header id="header">
      <h1>Where's...</h1>
      <p>How to play</p>
      <p>GitHub</p>
      <Scoreboard current={score.current} max={score.max} />
    </S.Header>
  );
};

export default Header;
