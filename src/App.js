import { useState } from 'react';
import './App.css';
import bg from './assets/images/bg.jpg';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {
  const [menu, setMenu] = useState({
    isHidden: true,
    location: { y: 0, x: 0 },
  });

  const onClick = (e) => {
    if (!menu.isHidden) {
      setMenu({ ...menu, isHidden: true });
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const headerOffset = document.getElementById('header').scrollHeight;
    const x = e.clientX - rect.left + 5;
    const y = e.clientY + headerOffset - rect.top + 5;
    setMenu({ isHidden: false, location: { y, x } });
  };

  return (
    <div className="App">
      <Header />
      <Menu characters={[]} menu={menu} />
      <img
        className="bg-image"
        src={bg}
        alt="Artwork with various characters"
        onClick={onClick}
      />
    </div>
  );
};

export default App;
