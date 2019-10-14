import React from "react";
import Person from "./components/Person/Person";
import "./App.scss";

class App extends React.Component {
	state = {
		persons: [{ name: "Max" }, { name: "Charlie" }, { name: "Sean" }]
	};
	switchNameHandler = newName => {
		this.setState({
			persons: [{ name: newName }, { name: newName }, { name: "LilSean" }]
		});
	};

	nameChangedHandler = e => {
		this.setState({
			persons: [{ name: "Max" }, { name: "CHarlie" }, { name: e.target.value }]
		});
	};
	render() {
		return (
			<div>
				<button
					style={{
						backgroundColor: "red",
						color: "#fff",
						border: "none",
						borderRadius: "4px"
					}}
					onClick={() => this.switchNameHandler("dum max")}
				>
					Switch Name
				</button>
				<Person name={this.state.persons[0].name} />
				<Person
					click={() => this.switchNameHandler("dummm max")}
					name={this.state.persons[1].name}
				>
					My Hobbies: Computer Stuff
				</Person>
				<Person
					changed={this.nameChangedHandler}
					name={this.state.persons[2].name}
				/>
			</div>
		);
	}
}
export default App;
