import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const Button = (props) => {
  const {text, onClick} = props;
  return <button
      onClick={onClick}>{text}</button>
}

const AnecdoteToday = (props) => {
  const {anecdote, numVotes} = props
  return <div>
    <h1>Anecdote of the Day</h1>
    {anecdote}
    <br/>
    has {numVotes} votes
  </div>
}

const PopularAnecdote = (props) => {
  const {anecdote} = props
  return <div>
    <h1>Anecdote with most votes</h1>
    {anecdote}
  </div>
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [anecdoteToday, setAnecdoteToday] = useState(anecdotes[0]);
  const [votes, setVotes] = useState(anecdotes.map((a) => 0))

  const nextAnecdote = () => {
    setSelected(selected < anecdotes.length-1 ? selected + 1 : 0)
  }

  const vote = () => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes]
      newVotes[selected] += 1
      console.log(newVotes)
      return newVotes
    })
  }

  const maxIndex = votes.reduce((maxIndex, currentValue, currentIndex) => 
    currentValue > votes[maxIndex] ? currentIndex : maxIndex, 0);

  return (
    <div className="App">
      <AnecdoteToday anecdote={anecdotes[selected]}
        numVotes={votes[selected]}/>
      <Button onClick={nextAnecdote} 
        text={"next anecdote"}/>
      <Button onClick={vote}
        text={"vote"}/>
      <br/>
      <PopularAnecdote anecdote={anecdotes[maxIndex]}/>
      
    </div>
  );
}

export default App;
