import React, { Component } from 'react';
import '../src/assets/css/style.css'
import '../src/assets/css/App.scss';

import TodoForm from './components/TodoForm';

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
        <div className="Todo">
          <i className="icon-list"></i>
        Todolist
      </div>
        <TodoForm />
      </div>
    )
  }
}