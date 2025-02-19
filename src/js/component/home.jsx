import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("")
							}
						}}
						placeholder="Add something" />
				</li>
				{todos.map((item, index) =>
				(<li>{item}<button onClick={() =>
					setTodos(todos.filter((t, currentIndex) =>
						index != currentIndex))}>Delete</button></li>))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
