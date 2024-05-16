import CourseGoal from './component/CourseGoal.tsx'

import './App.css'
import Header from './component/Header.tsx';

function App() {
  

  return (
		<>
			<Header
				image={{
					src: 'https://img.freepik.com/free-photo/team-together-creating-word-goals_1134-318.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715644800&semt=ais_user',
					alt: 'A list of goals',
				}}
			>
				<h1>Your Course Goals</h1>
			</Header>
			<CourseGoal title="Learn React + Ts">Learn it from ground up</CourseGoal>
		</>
	);
}

export default App
