import React from 'react';
import './App.css';
import UserList from "./Components/UserList/UserListComponent";
import HobbyListComponent from "./Components/HobbyList/HobbyListComponent";

const apiURL = 'http://127.0.0.1:3001';

type AppState = {
    users: IUserModel[],
    hobbies: IHobbyModel[],
    currentUserId: string
}

class App extends React.Component {

  state: AppState = {
    users: [],
    hobbies: [],
    currentUserId: ""
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
      fetch(apiURL + '/user')
          .then(res => res.json())
          .then((data) => {
              this.setState({ users: data })
          })
          .catch(console.log)
  }

  addNewUser(newUserName: string) {
      fetch(apiURL + '/user', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: newUserName})
      })
          .then(res => res.json())
          .then( (data) => {
              this.setState({
                  users: [...this.state.users, data]
              });
          })
          .catch(console.log)
  }

  addNewHobby(newHobbyItem: INewHobbyObject) {
      if (this.state.currentUserId === "") {
          console.log("User must be selected first!");
          return;
      }
      fetch(apiURL + '/hobbies' + `/${this.state.currentUserId}`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newHobbyItem)
      })
          .then(res => res.json())
          .then( (data) => {
              this.setState({
                  hobbies: [...this.state.hobbies, data]
              });
          })
          .catch(console.log)
  }

  userSelected(userId: string) {
      this.setState({currentUserId: userId});
      fetch(apiURL + '/hobbies' + `/${userId}`)
          .then(res => res.json())
          .then((data) => {
              console.log(data);
              this.setState({ hobbies: data })
          })
          .catch(console.log)
  }

  render() {
    return (
        <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 4fr 1fr"}}>
            <UserList users={this.state.users} select={this.userSelected.bind(this)} addNewUser={this.addNewUser.bind(this)}/>
            <HobbyListComponent hobbies={this.state.hobbies} addNewHobby={this.addNewHobby.bind(this)}/>
        </div>
    );
  }
}

export default App;
