import * as S from './styles';

const Menu = (props) => {
  const { characters, menu } = props;
  let visible = false;
  if (!menu.isHidden) {
    visible = true;
  } else {
    visible = false;
  }

  return (
    <S.MenuContainer
      style={{
        top: menu.location.y,
        left: menu.location.x,
        display: visible ? 'block' : 'none',
      }}
    >
      <S.BtnCloseMenu>x</S.BtnCloseMenu>
      {characters.map((character) => (
        <S.MenuItem key={character}>{character}</S.MenuItem>
      ))}
    </S.MenuContainer>
  );
};

export default Menu;
