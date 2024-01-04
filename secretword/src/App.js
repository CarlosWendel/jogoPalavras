
import './App.css';
import StartScreen from './components/StartScreen';
import{useCallback, useEffect,useState} from "react";
import{wordList} from"./data/word";
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages =[
  {id:1,name:"start"},

  {id:2,name:"game"},

  {id:3,name:"end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  const[words] = useState(wordList);

  console.log(words);
  return (
    <div className="App">
    {gameStage === "start" && <StartScreen/>}
    {gameStage === "game" && <Game/>}
    {gameStage === "end" && <GameOver/>}
    </div>
  );
}

export default App;
