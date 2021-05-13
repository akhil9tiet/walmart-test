import React, { useState, useEffect, useRef } from 'react';
import './Table.css';

const Tr = ({ row, index, columns }) => {
	const [rowChecked, setRowChecked] = useState([]);
	const checkRef = useRef(null);

	const checkHadler = () => {
		setRowChecked([checkRef.current.className]);
		console.log('checkRef', rowChecked);
		console.log(checkRef.current.className);
	};

	return (
		<tr key={index}>
			<td>
				<input ref={checkRef} className={row.id} type='checkbox' onClick={checkHadler}></input>
			</td>
			<td>
				<a href='#'>Edit</a>
			</td>
			<td>{row.id}</td>
			<td>{row.name}</td>
			<td>{row.username}</td>
			<td>{row.email}</td>
			<td>{`${row.address.street} ${row.address.suite} ${row.address.city} ${row.address.zipcode}`}</td>
			<td>{row.phone}</td>
			<td>{row.website}</td>
			<td>{row.company.name}</td>
		</tr>
	);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ data }) {
	console.log(data);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		if (data) {
			const col = Object.keys(data[0]);
			setColumns([' ', ' ', ...col]);
		}
	}, []);

	return (
		<React.Fragment>
			<table>
				<thead>
					<tr>
						{(columns || []).map((column, index) => (
							<td key={index}>{column}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<Tr row={row} index={i} columns={columns} />
					))}
				</tbody>
			</table>
		</React.Fragment>
	);
}
