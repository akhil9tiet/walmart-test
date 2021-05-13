import React, { useState, useEffect } from 'react';
import Table from './Components/Table/Table';
import './App.css';

function App() {
	let [data, setData] = useState(null);

	useEffect(async () => {
		let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		let resp = await response.json();
		setData(resp);
	}, []);

	return (
		<div className='App'>
			<p>x Item Selected</p>
			<p>Search</p>
			{data && <Table data={data} />}
		</div>
	);
}

export default App;
