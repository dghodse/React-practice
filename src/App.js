import React, { Component } from 'react';
import './App.css';
import UserOutput from "./Components/UserOutput"
import UserInput from "./Components/UserInput"

class App extends Component {

  state = ({
    the_usernames:[{username: "Ross"}]
  })

  setUsername = () =>{
    this.setState({
      the_usernames:[{username: "New Ross"}]
    })
  }
  
  usernameHandler = (event) => {
    this.setState({
      the_usernames:[{username: event.target.value}]
    })
  }

  render() {
    return (
      <div className="App">
      <div>
      <h1></h1>
      <UserInput change={this.usernameHandler}/>
      <UserOutput username = {this.state.the_usernames[0].username} click={this.setUsername}/>
        <ol>
          {/* <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li> */}
        </ol>
      </div>
      </div>
    );
  }
}

export default App;
