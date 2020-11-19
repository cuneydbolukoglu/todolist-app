import React, { Component } from 'react'
import Todolist from './TodoList';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: '',
            items: [],
        }
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        })
    }

    componentDidUpdate() {
        localStorage.setItem("items", JSON.stringify(this.state.items));
    }

    componentWillMount() {

        this.setState({
            items: JSON.parse(localStorage.getItem("items"))
        })
    }

    render() {
        return (
            <div className="wrapper">
                <form className="Todo-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="✍️ Add item..."
                        className="todo-input"
                        onChange={this.handleChange}
                    />
                    <i className="icon-plus-solid addbtn" title="Add item" onClick={this.handleSubmit}></i>
                    <Todolist items={this.state.items} />
                </form>
            </div>
        )
    }
}