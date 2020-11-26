import React, { Component } from 'react'
import Todolist from './TodoList';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: '',
            data: [
                { id: 0, name: 'Cuneyd', completed: true, },
                { id: 1, name: 'React', completed: false, },
                { id: 2, name: 'jQuery', completed: true, }
            ]
        }
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const todo = {
            id: Date.now(),
            name: this.state.term,
            completed: false
        }

        this.state.data.push(todo);
    }

    componentDidUpdate() {
        localStorage.setItem("todo", JSON.stringify(this.state.data));
    }

    componentWillMount() {

        this.setState({
            data: JSON.parse(localStorage.getItem("todo"))
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
                    <Todolist data={this.state.data} />
                </form>
            </div>
        )
    }
}