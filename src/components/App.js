import React, { Component } from 'react';
import '../styles/App.css';
import PostsIndex from './PostsIndex';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Hello World!!</h3>
        <PostsIndex />
      </div>
    );
  }
}
