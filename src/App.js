import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import CardList from "./CardList";


function App() {
    const [cards, setCards] = useState(sampleCards);
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SmashCards
        </p>
      </header>
        <CardList cards={cards}/>
    </div>
    );
}

const sampleCards = [
    {
        id: 1,
        question: 'what is 2 + 2?',
        answer: '4',
        options: ['2', '3', '4', '5']
    },
    {
        id: 2,
        question: 'question 2?',
        answer: 'answer5',
        options: ['answer1', 'answer2', 'answer3', 'answer5']
    },
    {
        id: 1,
        question: 'what is one plus two?',
        answer: 'three',
        options: ['two', 'three', 'four', 'five']
    }
]

export default App;
