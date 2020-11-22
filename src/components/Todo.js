import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="Todo">
        <i className="icon-list"></i>
        Todolist
      </div>
    )
  }
}