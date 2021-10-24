import * as S from './styles';

const Menu = (props) => {
  const { characters, menu } = props;

  return (
    <S.MenuContainer
      style={{
        top: menu.location.y,
        left: menu.location.x,
        display: menu.isHidden ? 'none' : 'block',
      }}
    >
      <S.BtnCloseMenu>x</S.BtnCloseMenu>
      {characters.map((character) => (
        <S.MenuItem key={character.name}>
          <img src={character.image} alt={character.name} />
          <span>{character.name}</span>
        </S.MenuItem>
      ))}
    </S.MenuContainer>
  );
};

export default Menu;
