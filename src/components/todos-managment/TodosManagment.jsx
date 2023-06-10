import { useEffect, useRef, useState } from 'react';

import './todos-managment.css';

export default function TodosManagment() {
	const textInputRef = useRef();
	const [todos, setTodos] = useState([]);

	function addTodoHandler() {
		if (textInputRef.current.value === '') return;

		setTodos([
			...todos,
			{ id: todos.length, taskText: textInputRef.current.value, isDone: false },
		]);

		textInputRef.current.value = '';
	}

	function deleteTodoHandler(e) {
		setTodos(
			todos.filter(item => `delete-id-${item.id}` != e.target.classList[1])
		);
	}

	return (
		<>
			<section className='todos-container'>
				{todos.map(item => (
					<div className='todo-box' key={item.id}>
						{item.taskText}
						<input
							className={`todo-box-edit edit-id-${item.id}`}
							type='button'
							value='Edit'
						/>
						<input
							className={`todo-box-delete delete-id-${item.id}`}
							type='button'
							value='Delete'
							onClick={deleteTodoHandler}
						/>
					</div>
				))}
			</section>
			<div className='inputs-container'>
				<input
					ref={textInputRef}
					type='text'
					placeholder='What you need to do?'
				/>
				<input
					className='add-todo-btn'
					type='button'
					value='ADD TODO'
					onClick={addTodoHandler}
				/>
			</div>
		</>
	);
}
