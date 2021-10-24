import './App.css';
import Header from './components/Header';
import bg from './assets/images/bg.jpg';

const App = () => {
  return (
    <div className="App">
      <Header />
      <img
        className="bg-image"
        src={bg}
        alt="Artwork with various characters"
      />
    </div>
  );
};

export default App;
