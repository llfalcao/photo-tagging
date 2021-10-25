import { useEffect, useState } from 'react';
import './App.css';
import bg from './assets/images/bg.jpg';
import characterData from './assets/data';
import Header from './components/Header';
import Menu from './components/Menu';

// TODO: Retrieve data from Firebase
const locationData = [
  {
    name: 'batman',
    location: {
      x0: 10,
      x1: 14,
      y0: 68,
      y1: 70,
    },
  },
  {
    name: 'kratos',
    location: {
      x0: 57,
      x1: 62,
      y0: 88,
      y1: 89,
    },
  },
  {
    name: 'link',
    location: {
      x0: 22,
      x1: 27,
      y0: 96,
      y1: 97,
    },
  },
  {
    name: 'patrick',
    location: {
      x0: 65,
      x1: 69,
      y0: 78,
      y1: 79,
    },
  },
  {
    name: 'gundam',
    location: {
      x0: 75,
      x1: 80,
      y0: 91,
      y1: 94,
    },
  },
];

const App = () => {
  const [menu, setMenu] = useState({
    isHidden: true,
    location: { y: 0, x: 0 },
  });

  // Close menu by pressing Esc
  useEffect(() => {
    const close = (e) => {
      if (e.key.toLowerCase() === 'escape') {
        setMenu({ ...menu, isHidden: true });
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);

  const toggleMenu = (e) => {
    if (!menu.isHidden) {
      setMenu({ ...menu, isHidden: true });
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const headerOffset = document.getElementById('header').scrollHeight;
    const x = e.clientX - rect.left;
    const y = e.clientY + headerOffset - rect.top;
    setMenu({ isHidden: false, location: { y, x } });
  };

  const getOffsetPercentage = () => {
    const { location } = menu;
    const image = document
      .getElementsByClassName('bg-image')[0]
      .getBoundingClientRect();

    return [
      Math.round((location.x * 100) / image.width),
      Math.round((location.y * 100) / image.height),
    ];
  };

  const onMenuItemClick = (name) => {
    const offset = getOffsetPercentage();
    const [x, y] = [offset[0], offset[1]];
    const result = locationData.filter(
      (character) =>
        character.name === name &&
        x >= character.location.x0 &&
        x <= character.location.x1 &&
        y >= character.location.y0 &&
        y <= character.location.y1,
    );

    if (result.length > 0) {
      console.log(`Found ${name}!`);
    } else {
      console.log('No one around here');
      setMenu({ ...menu, isHidden: true });
    }
  };

  // Close menu by clicking the X button
  const onCloseMenu = () => {
    setMenu({ ...menu, isHidden: true });
  };

  return (
    <div className="App">
      <Header />
      {menu.isHidden ? null : (
        <Menu
          characters={characterData}
          menu={menu}
          onMenuItemClick={onMenuItemClick}
          onCloseMenu={onCloseMenu}
        />
      )}

      <img
        className="bg-image"
        src={bg}
        alt="Artwork with various characters"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default App;
