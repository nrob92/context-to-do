import React, { useState, useContext } from "react";
import { ContextApp } from "./Home.jsx";

const Form = props => {
	const [value, setValue] = useState("");

	const { contextToggle, listItem, deleteButton, count } = useContext(
		ContextApp
	);

	const addValue = e => {
		e.preventDefault();
		if (value === "") return;
		contextToggle(value);
		setValue("");
	};

	return (
		<div>
			<div className="container">
				<h1>Nicks To Do List</h1>
				<form>
					<input
						className="input"
						placeholder="Type Here"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button className="addValueBtn" onClick={addValue}>
						Click Me
					</button>
				</form>
				<div>
					{listItem.map((item, index) => (
						<li key={index}>
							{item}
							<button
								onClick={() => deleteButton(index)}
								className="deleteButton">
								X
							</button>
						</li>
					))}
				</div>
				{count > 0 && <li>{count}</li>}
			</div>
		</div>
	);
};

export default Form;
