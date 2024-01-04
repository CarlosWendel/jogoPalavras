
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
  const [pickedWord, setPickedWord]= useState("")
  const [pickedCategory, setPickedCategory]= useState("")
  const [letters, setLetters]= useState([])

  const pickedWordAndCategory=()=>{
    const categories=Object.keys(words)
    const category= categories[Math.floor(Math.random() * Object.keys(categories).length)]

    

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    

    return {word,category}
  }
  const startGame = () => {

    const {word, category} = pickedWordAndCategory();

    let wordletter =word.split("")

    wordletter = wordletter.map((l) => l.toLowerCase())
    console.log(word,category)
    console.log(wordletter)


    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)
    
      setGameStage(stages[1].name)
  }
  const verifyLetter =()=>{
    setGameStage(stages[2].name)
  }

  const retry=()=>{
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
    {gameStage === "start" && <StartScreen startGame={startGame}/>}
    {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
    {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
