import React, { Component } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

export class Login extends Component {

  state = {
    credentials: {
      username: '',
      password: '',
    },
    error: '',
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
      error: '',
    });
  };

  login = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/bubbles')
      })
  }

  render() {
    return (
      <div className='login-form'>
        <h1>Welcome to the Bubble App</h1>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <p style={{ color: 'red', fontSize: '12px'}}>{this.state.error}</p>
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
