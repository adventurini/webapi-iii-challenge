import React, { Component } from 'react';
import axios from 'axios';
import User from './User'

export default class Users extends Component {
  state = {
    users : []
  }

  componentDidMount(){
    this.getUsers()
  }
  getUsers = () => {
    axios
      .get('http://localhost:4445/api/users')
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data
        })
      }
       )
  }
  render() {
    return (
      <div>
        {this.state.users.map(user=>{
          return <User user={user} key={user.id}/>
        })}
      </div>
    )
  }
}
