import * as S from './styles';

const Scoreboard = ({ score, max }) => {
  return (
    <S.Container>
      <S.Content>
        Found: {score}/{max}
      </S.Content>
    </S.Container>
  );
};

export default Scoreboard;
