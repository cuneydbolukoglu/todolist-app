import React, { Component } from 'react';
import '../src/assets/css/style.css'
import '../src/assets/css/App.scss';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "cuneyd"
    };
  }


  render() {
    return (
      <div className="Todo-app">
        <Todo />
        <TodoForm />
      </div>
    )
  }
}