import React from "react";
import "./Person.scss";
const Person = props => {
	return (
		<div className='Person'>
			<p onClick={props.click}>
				My name is {props.name} and I am {Math.floor(Math.random() * 30)} years
				old.
			</p>
			<p>{props.children}</p>
			<input
				placeholder='testing'
				onChange={props.changed}
				value={props.name}
				type='text'
			/>
		</div>
	);
};

export default Person;
