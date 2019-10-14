import React from "react";
import uuid from "uuidv4";
import Person from "./components/Person/Person";
import "./App.scss";

class App extends React.Component {
	state = {
		persons: [{ name: "Max" }, { name: "Charlie" }, { name: "Sean" }],
		showPersons: false
	};
	switchNameHandler = newName => {
		this.setState({
			persons: [{ name: newName }, { name: newName }, { name: "LilSean" }]
		});
	};
	toggleHandler = () => {
		const show = this.state.showPersons;
		this.setState({ showPersons: !show });
	};

	nameChangedHandler = e => {
		this.setState({
			persons: [
				{ name: "Super Max" },
				{ name: "Monster Charlie" },
				{ name: e.target.value }
			]
		});
	};

	render() {
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person key={uuid()} name={person.name} />;
					})}
				</div>
			);
		}

		return (
			<div>
				<button
					style={{
						backgroundColor: "red",
						color: "#fff",
						border: "none",
						borderRadius: "4px"
					}}
					onClick={this.toggleHandler}
				>
					hide/unhide
				</button>
				{persons}
			</div>
		);
	}
}
export default App;
