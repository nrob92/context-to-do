import React, { createContext, useState } from "react";
import Form from "./Form.jsx";

export const ContextApp = createContext();

export default function Home() {
	const [listItem, setListItem] = useState([]);

	const [count, setCount] = useState(0);

	function contextToggle(value) {
		setListItem([...listItem, value]);

		if (value !== "") {
			setCount(count + 1);
		}
	}

	function deleteButton(index) {
		const deleted = listItem.filter((element, id) => id !== index);
		setListItem(deleted);
		setCount(prevCount => prevCount - 1);
	}

	const context = { contextToggle, listItem, deleteButton, count };

	return (
		<ContextApp.Provider value={context}>
			<Form />
		</ContextApp.Provider>
	);
}
