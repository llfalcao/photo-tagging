import * as S from './styles';

const Menu = (props) => {
  const { menu, onMenuItemClick, hideMenu } = props;

  return (
    <S.MenuContainer
      id="menu"
      style={{
        top: menu.location.y - menu.offset.y,
        left: menu.location.x - menu.offset.x,
        display: menu.isDisabled || menu.isHidden ? 'none' : 'block',
      }}
    >
      <S.BtnCloseMenu onClick={hideMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
        </svg>
      </S.BtnCloseMenu>

      {menu.characters.map((character) => (
        <S.MenuItem
          key={character.id}
          onClick={() => onMenuItemClick(character.id, character.name)}
        >
          <img src={character.image} alt={character.name} />
          <span>{character.name}</span>
        </S.MenuItem>
      ))}
    </S.MenuContainer>
  );
};

export default Menu;
