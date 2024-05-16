
import './App.css'
import Header from './component/Header.tsx';
import { useState } from 'react';
import CourseGoalList from './component/CourseGoalList.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  
  const [goals,setGoals] = useState<CourseGoal[]>([])

  function handleAddGoals() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn in Depth'
        
      }

      return [...prevGoals , newGoal]
    })
  }
  return (
		<>
			<Header
				image={{
					src: 'https://img.freepik.com/free-photo/team-together-creating-word-goals_1134-318.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715644800&semt=ais_user',
					alt: 'A list of goals',
				}}
			>
				<h1>Your Course Goals</h1>
				<button onClick={handleAddGoals}>Add Goals</button>
				<CourseGoalList goals={goals}   />
			</Header>
		</>
	);
}

export default App
