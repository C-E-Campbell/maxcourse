import React from "react";
import Person from "./components/Person/Person";
import "./App.scss";

class App extends React.Component {
	state = {
		persons: [{ name: "Max" }, { name: "Charlie" }, { name: "Sean" }]
	};

	switchNameHandler = () => {
		this.setState({
			persons: [
				{ name: "Super Max" },
				{ name: "Monster Charlie" },
				{ name: "Lil Sean" }
			]
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} />
				<Person name={this.state.persons[1].name}>
					My Hobbies: Computer Stuff
				</Person>
				<Person name={this.state.persons[2].name} />
			</div>
		);
	}
}
export default App;
