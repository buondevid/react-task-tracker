import PropTypes from 'prop-types';

const Header = () => {
	return (
		<header className='header'>
			<h1>Task Tracker</h1>
			<button className="btn">Add</button>
		</header>
	)
}

// gives a default value to props if not specified
Header.defaultProps = {
	title: 'Task Tracker'
}

// type checking for components' props (like Typescript)
Header.propTypes = {
	title: PropTypes.string.isRequired
}

//inline styling - CSS in JS
// const headerStyle = {
// 	color: `red`,
// 	background: 'yellow'
// }

export default Header;