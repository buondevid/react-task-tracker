import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import { useState, /* useEffect */ } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm',
			reminder: true,
		},
		{
			text: 'Baby Sitter',
			day: 'Feb 7th at 2:30pm',
			reminder: false,
			id: 3,
		},
	]);

	/////////// ONLY FOR REST API
	// useEffect(() => {
	// 	const getTasks = async () => {
	// 		const tasksFromServer = await fetchTasks();
	// 		setTasks(tasksFromServer);
	// 	};
	// 	getTasks();
	// }, []);

	/////// ONLY FOR REST API Fetch tasks from database
	// const fetchTasks = async () => {
	// 	const res = await fetch('http://localhost:5000/tasks');
	// 	const data = await res.json();
	// 	return data;
	// };

	///////// ONLY FOR REST API Fetch one task from database
	// const fetchTask = async (id) => {
	// 	const res = await fetch(`http://localhost:5000/tasks/${id}`);
	// 	const data = await res.json();
	// 	return data;
	// };

	// Add Task
	const addTask = async (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);

		//// ONLY FOR REST API
		// const res = await fetch(`http://localhost:5000/tasks`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(task),
		// });

		// const data = await res.json();

		// setTasks([...tasks, data]);
	};

	// Delete Task
	const deleteTask = async (id) => {
		// await fetch(`http://localhost:5000/tasks/${id}`, {
		// 	method: 'DELETE',
		// });
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = /* async */ (id) => {
	// 	// const taskToToggle = await fetchTask(id);
	// 	// const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
	// 	// const res = await fetch(`http://localhost:5000/tasks/${id}`, {
	// 	// 	method: 'PUT',
	// 	// 	headers: {
	// 	// 		'Content-type': 'application/json',
	// 	// 	},
	// 	// 	body: JSON.stringify(updatedTask),
	// 	// });

	// 	// const data = await res.json();

		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<Router>
			<div className='container'>
				<Header showAdd={showAddTask} onAdd={() => setShowAddTask((prev) => !prev)} />
				<Route
					path='/'
					exact
					render={() => (
						<>
							{showAddTask && <AddTask onAdd={addTask} />}
							{tasks.length > 0 ? (
								<Tasks tasks={tasks}  onToggle={toggleReminder} onDelete={deleteTask} />
							) : (
								'No task to show'
							)}
						</>
					)}
				/>
				<Route path='/about' component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
