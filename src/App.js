//components
import Home from './components/Home';
import GameBoard from './components/GameBoard';
//styles
import GlobalStyles from './util/GlobalStyles';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <GameBoard />
    </div>
  );
}

export default App;
