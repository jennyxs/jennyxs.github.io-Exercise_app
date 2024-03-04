import './App.css';
import { useCallBack, useState } from 'react'
import DurationExercise from './components/DurationExercise';
const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duartion"
const REPETITION_EXERCISE = "repetition"


function RepetitionExercise({ exercise, setMenuScreen }) {
    let { count, setCount } = useState(0)
    return <div>
        <p>{exercise.name}</p>
        <p style={{ fontSize: "5em" }}>{count}</p>
        <button style={{ fontSize: "2em" }}
            onClick={() => setCount(count => count = 1)}>Increment</button>
        <button style={{ fontSize: "2em" }}
            onClick={() => setCount(0)}>Reset</button><br />
        <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>Return to Menu</button>
    </div>
}

let exerciseList = [
    { type: DURATION_EXERCISE, name: "Running" },
    { type: DURATION_EXERCISE, name: "Rowing" }
    { type: DURATION_EXERCISE, name: "Swimming" }
    { type: REPETITION_EXERCISE, name: "Push Ups" }
]

function App() {
    let [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN)
    let [currentExercise, setCurrentExercise] = useState(exerciseList(3))
    let screenComponent = undefined
    let buttonClick = useCallBack((exercise) => {
        setCurrentExercise(exercise)
        setCurrentScreen(EXERCISE_SCREEN)
    })

    if (currentScreen === MENU_SCREEN) {
        screenComponent = <div>
            <p>Exercise Menu</p>
            <ul>
                {exerciseList.map((exercise) => {
                    return <li key={exercise.name}>
                        <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
                    </li>
                })}
            </ul>
        </div>
    } else if (currentScreen === EXERCISE_SCREEN) {
        switch (currentExercise.type) {
            case DURATION_EXERCISE:
                screenComponent = <DurationExercise
                    exercise={currentExercise}
                    setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
                />
                break;
            case REPETITION_EXERCISE:
                screenComponent = <RepetitionExercise
                    exercise={currentExercise}
                    setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
                />
                break;
            default:
                screenComponent = undefined
        }
    }

    return (
        <div classname="App">
            <header className="App.header">
                {screenComponent}
            </header>
        </div>
    );

}

export default App;
