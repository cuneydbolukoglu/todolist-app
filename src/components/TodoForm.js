import React, { Component } from 'react'
import Todolist from './TodoList';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: '',
            data: [
                { id: 2857, name: 'React', completed: true }
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

        this.setState(state => ({
            data: state.data.concat(todo)
        }));
    }

    deleteItem(id) {
        this.setState({
            data: this.state.data.filter(item => item.id !== id)
        })
    }

    checkItem(id) {
        const data = this.state.data
        for (let i in data){
            if(data[i].id === id){
                data[i].completed = !data[i].completed;
                break;
            }
            
            this.setState({
                data: data
            })
        }
    }

    componentDidUpdate() {
        // localstorage sync update
        localStorage.setItem("todo", JSON.stringify(this.state.data));
    }

    componentWillMount() {
        // load items array from localstorage        
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
                    <Todolist
                        data={this.state.data}
                        deleteItem={this.deleteItem.bind(this)}
                        checkItem={this.checkItem.bind(this)}
                    />
                </form>
            </div>
        )
    }
}