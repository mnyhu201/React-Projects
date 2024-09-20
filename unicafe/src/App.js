import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const Button = ({onClick, state, setState, value}) => {
  return <button onClick={onClick}>{value}</button>;
}

const Average = ({good, bad}) => {
  if(good + bad > 0){
    return <StatLine text="average" value={(good-bad)/(good+bad)}/>
  }
  return <StatLine text="average" value={0}/>
}

const Positive = ({good, bad, neutral}) => {
  if(good > 0){
    return <StatLine text="positive" value={(good)/(good+neutral+bad)}/>
  }
  return <StatLine text="positive" value="n/a"/>
}

const StatLine = ({text, value}) => {
  return <tr>
    <td>{text}</td> 
    <td>{value}</td> 
  </tr>
}

const Statistics = ({text, good, neutral, bad}) => {
  if(good + neutral + bad > 0)
    return <>
      <h1>{text}</h1>
      <table>
          <StatLine text="good" value={good}/>
          <StatLine text="neutral" value={neutral}/>
          <StatLine text="bad" value={bad}/>
          <Average good={good} bad={bad}/>
          <Positive good={good} bad={bad} neutral={neutral}/>
      </table>
    </>
  else 
    return <>
      <h1>{text}</h1>
      No feedback given
    </>
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClick = (rating) => {
    if(rating == 'good'){
      return () => setGood(good + 1)
    } else if(rating == 'neutral'){
      return () => setNeutral(neutral + 1)
    } else if(rating == 'bad'){
      return () => setBad(bad + 1)
    } else {
      return () => console.log("bad input")
    }
  }

  return (
    <div className="App">
      <h1>Feedback Counter</h1>
      <Button value="good" 
        onClick={onClick('good')}/>
      <Button value="neutral" 
        onClick={onClick('neutral')}/>
      <Button value="bad" 
        onClick={onClick('bad')}/>
      <Statistics text="Statistics" good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
