import * as S from './styles';
import characterData from '../../assets/data';

const Help = () => {
  return (
    <S.Container>
      <h2>Welcome!</h2>
      <p>Your goal is to find these five characters in the image below.</p>
      <S.CharacterContainer>
        {characterData.map((c) => (
          <S.CharacterItem key={c.id}>
            <img src={c.image} alt={c.name} />
            <span>{c.name}</span>
          </S.CharacterItem>
        ))}
      </S.CharacterContainer>
      <p>
        Once you find one, left-click it and select the appropriate character.
        The faster you spot them, the higher your ranking will be!
      </p>
      <p>Enjoy!</p>
    </S.Container>
  );
};

export default Help;
