// import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task onDelete={onDelete} key={task.id} task={task} />
			))}
		</>
	);
};

// Button.defaultProps = {

// }

// Button.propTypes = {

// }

export default Tasks;
