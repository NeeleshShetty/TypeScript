// type CourseGoalProps = {
//   title: string;
//   description: string;
// }

import { type FC, type PropsWithChildren } from "react";

// interface CourseGoalProps {
// 	title: string;
// 	children : ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>

const CourseGoal:FC<CourseGoalProps> = ({ id,title, children,onDelete }: CourseGoalProps) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{children}</p>
			</div>
			<button onClick={()=> onDelete(id)}>Delete</button>
		</article>
	);
};

export default CourseGoal;
