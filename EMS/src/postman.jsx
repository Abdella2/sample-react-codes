import { Component } from 'react';
import { post } from './services/postmanService';
class Postman extends Component {
  componentDidMount() {
    post({
      name: 'abdella',
      email: 'abd.nur@gmail358.com',
      password: 'pass123456'
    });
  }

  render() {
    return;
  }
}

export default Postman;
