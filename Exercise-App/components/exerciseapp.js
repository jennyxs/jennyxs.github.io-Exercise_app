import React, { useState } from 'react';

const RunningExercise = () => {
    const [laps, setLaps] = useState([]);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        setIsRunning(true);
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return intervalId;
    };

    const stopTimer = (intervalId) => {
        clearInterval(intervalId);
        setIsRunning(false);
    };

    const resetTimer = () => {
        setTimer(0);
        setLaps([]);
    };

    const recordLap = () => {
        setLaps((prevLaps) => [...prevLaps, timer]);
    };

    return (
        <div>
            <h2>Running Exercise</h2>
            <div>{timer} seconds</div>
            <button onClick={() => {
                const intervalId = startTimer();
            }}>
                Start
            </button>
            <button onClick={() => {
                stopTimer(intervalId);
            }}>
                Stop
            </button>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={recordLap}>Record Lap</button>
            <div>
                <h3>Laps:</h3>
                <ul>
                    {laps.map((lap, index) => (
                        <li key={index}>Lap {index + 1}: {lap} seconds</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RunningExercise;
