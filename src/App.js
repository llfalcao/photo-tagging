import { useEffect, useState } from 'react';
import './App.css';
import bg from './assets/images/bg.jpg';
import characterData from './assets/data';
import { locationData, getCurrentTime, secToDate, getLeaderboard } from './web';
import Header from './components/Header';
import Menu from './components/Menu';
import Notification from './components/Notification';
import WinnerModal from './components/WinnerModal';
import Help from './components/Help';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const [time, setTime] = useState();
  const [score, setScore] = useState({ current: 0, max: characterData.length });
  const [markers, setMarkers] = useState([]);
  const [leaderboard, setLeaderboard] = useState({
    visible: false,
    ranking: [],
  });
  const [howTo, setHowTo] = useState(false);

  const [notification, setNotification] = useState({
    visible: false,
    isCorrect: false,
    character: '',
  });

  const [menu, setMenu] = useState({
    characters: characterData,
    isHidden: true,
    location: { y: 0, x: 0 },
    offset: { y: 0, x: 0 },
    isDisabled: false,
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

  // Set initial time and date when the game starts
  // Also load rankings from Firebase
  useEffect(() => {
    const timestamp = getCurrentTime();
    setTime({
      start: timestamp.seconds,
      end: 0,
      date: secToDate(timestamp),
      total: 0,
    });
  }, []);

  const toggleLeaderboard = async () => {
    if (leaderboard.visible) {
      setLeaderboard({ ...leaderboard, visible: false });
    } else {
      getLeaderboard().then((data) =>
        setLeaderboard({
          visible: true,
          ranking: data,
        }),
      );
    }

    setHowTo(false);
    window.scrollTo(0, 0);
  };

  const toggleHowToPlay = () => {
    setHowTo(!howTo);
    setLeaderboard({ ...leaderboard, visible: false });
  };

  // Display or hide the menu by clicking the image
  const toggleMenu = (e) => {
    if (score.current === score.max) return;

    if (!menu.isHidden) {
      setMenu({ ...menu, isHidden: true });
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const headerOffset = document.getElementById('header').scrollHeight;
    const x = e.clientX;
    const y = e.clientY + headerOffset - rect.top;
    // Prevent menu from overflowing
    let offsetX = 0;
    let offsetY = 0;
    if (window.innerWidth - e.clientX < 183) {
      offsetX = 190;
    }
    if (window.innerHeight - e.clientY < 218) {
      offsetY = 230;
    }

    setMenu({
      ...menu,
      isHidden: false,
      location: { x, y },
      offset: { x: offsetX, y: offsetY },
    });
  };

  // Calculates the click position independent of screen size
  const getOffsetPercentage = () => {
    const { location } = menu;
    const image = document
      .getElementsByClassName('bg-image')[0]
      .getBoundingClientRect();
    const headerOffset = document.getElementById('header').scrollHeight;
    const x = ((location.x * 100) / image.width).toFixed(1);
    const y = (((location.y - headerOffset) * 100) / image.height).toFixed(1);

    return [x, y];
  };

  // Remove character from the list once found
  const updateCharacterList = (currentScore, maxScore, name) => {
    const { characters } = menu;
    setMenu({
      ...menu,
      characters: characters.filter((el) => el.id !== name),
      isHidden: true,
      isDisabled: currentScore + 1 === maxScore ? true : false,
    });
  };

  // Display marker above characters found
  const markCharacter = (coord) => {
    const newMarkers = [...markers];
    newMarkers.push([coord.x, coord.y]);
    setMarkers(newMarkers);
  };

  // Format time before adding it to the database
  const secsToTime = (secs) => {
    const hours = Math.floor(secs / (60 * 60));
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const obj = {
      h: hours.toString().length === 1 ? `0${hours}` : hours,
      m: minutes.toString().length === 1 ? `0${minutes}` : minutes,
      s: seconds.toString().length === 1 ? `0${seconds}` : seconds,
    };
    return obj;
  };

  const formatTime = (obj) => `${obj.h}:${obj.m}:${obj.s}`;

  // Handle character selection from the menu
  const onMenuItemClick = (id, name) => {
    const offset = getOffsetPercentage();
    const [x, y] = [offset[0], offset[1]];
    locationData
      .then((data) =>
        data.filter(
          (character) =>
            character.name === id &&
            x >= character.location.x0 &&
            x <= character.location.x1 &&
            y >= character.location.y0 &&
            y <= character.location.y1,
        ),
      )
      .then((result) => {
        if (result.length > 0) {
          const { current, max } = score;
          const { location } = menu;
          setScore({ ...score, current: current + 1 });
          updateCharacterList(current, max, id);
          markCharacter(location);
          setNotification({ visible: true, isCorrect: true, character: name });
          if (current + 1 === max) {
            const endTime = getCurrentTime().seconds;
            const total = secsToTime(endTime - time.start);
            const formattedTime = formatTime(total);
            setTime({ ...time, end: endTime, total: formattedTime });
          }
        } else {
          setNotification({ ...notification, visible: true, isCorrect: false });
          setMenu({ ...menu, isHidden: true });
        }
      });
  };

  // Close by clicking the X button
  const hideMenu = () => setMenu({ ...menu, isHidden: true });
  const hideHelp = () => setHowTo(false);
  const hideLeaderboard = () =>
    setLeaderboard({ ...leaderboard, visible: false });
  const hideNotification = () =>
    setNotification({ ...notification, visible: false });

  return (
    <div className="App">
      <Header
        score={score}
        toggleLeaderboard={toggleLeaderboard}
        toggleHowToPlay={toggleHowToPlay}
      />

      <img
        className="bg-image"
        src={bg}
        alt="Artwork with various characters"
        onClick={toggleMenu}
      />

      <Menu menu={menu} onMenuItemClick={onMenuItemClick} hideMenu={hideMenu} />

      {howTo ? <Help hideHelp={hideHelp} /> : null}
      {leaderboard.visible ? (
        <Leaderboard
          hideLeaderboard={hideLeaderboard}
          ranking={leaderboard.ranking}
        />
      ) : null}

      {markers.map((mark, i) => (
        <svg
          key={i}
          style={{
            position: 'absolute',
            fill: 'green',
            stroke: 'white',
            left: mark[0],
            top: mark[1],
            width: '4vw',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      ))}

      {notification.visible ? (
        <Notification msg={notification} hideNotification={hideNotification} />
      ) : null}

      {score.current === score.max ? (
        <WinnerModal time={time} toggleLeaderboard={toggleLeaderboard} />
      ) : null}
    </div>
  );
};

export default App;
