import * as S from './styles';
import characterData from '../../assets/data';

const Help = ({ hideHelp }) => {
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

      <S.BtnCloseMenu onClick={hideHelp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
        </svg>
      </S.BtnCloseMenu>
    </S.Container>
  );
};

export default Help;
