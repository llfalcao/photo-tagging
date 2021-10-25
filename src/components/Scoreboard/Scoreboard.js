import * as S from './styles';

const Scoreboard = ({ current, max }) => {
  return (
    <S.Container>
      <S.Content>
        Found: {current}/{max}
      </S.Content>
    </S.Container>
  );
};

export default Scoreboard;
