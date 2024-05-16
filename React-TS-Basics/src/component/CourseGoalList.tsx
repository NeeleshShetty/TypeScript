import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

 type CourseGoalList = {
    goals:CGoal[]
}

const CourseGoalList = ({ goals}:CourseGoalList) => {
  return (
		<>
			<ul>
				{goals.map((goal) => (
					<li>
						<CourseGoal title={goal.title}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
}

export default CourseGoalList