import './App.css';

import TodosManagment from './components/todos-managment/TodosManagment';

function App() {
	return (
		<>
			<header className='header-section'>
				<h1>Todo App</h1>
			</header>
			<section className='todos-section'>
				<TodosManagment />
			</section>
		</>
	);
}

export default App;
