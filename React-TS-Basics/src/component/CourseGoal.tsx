// type CourseGoalProps = {
//   title: string;
//   description: string;
// }

import { type PropsWithChildren } from "react";

// interface CourseGoalProps {
// 	title: string;
// 	children : ReactNode
// }

type CourseGoalProps = PropsWithChildren<{title:string}>

const CourseGoal = ({ title, children }: CourseGoalProps) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{children}</p>
			</div>
			<button>Delete</button>
		</article>
	);
};

export default CourseGoal;
