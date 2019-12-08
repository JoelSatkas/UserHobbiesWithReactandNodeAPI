import React from 'react';
import './App.css';
import UserList from "./Components/UserList/UserListComponent";
import HobbyListComponent from "./Components/HobbyList/HobbyListComponent";
import AddNewUser from "./Components/AddNewUser/AddNewUserComponent";

const apiURL = 'http://127.0.0.1:3001';

type AppState = {
    users: IUserModel[],
    hobbies: IHobbyModel[]
}

class App extends React.Component {

  state: AppState = {
    users: [],
    hobbies: []
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

  userSelected(userId: string) {
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
        <div className="App">
            <AddNewUser onSubmit={this.addNewUser.bind(this)}/>
            <UserList users={this.state.users} select={this.userSelected.bind(this)}/>
            <HobbyListComponent hobbies={this.state.hobbies}/>
        </div>
    );
  }
}

export default App;
