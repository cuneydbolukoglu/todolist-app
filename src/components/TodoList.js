import React, { Component } from 'react';

export default class Todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    deleteItem(e) {
        let todolist = this.props.items;
        let todo = todolist.splice(todolist.indexOf(e), 1);
        console.log("deleteItem: ", todo);

        this.setState({
            listitems: todolist
        })

    }

    componentDidUpdate() {
        localStorage.setItem("items", JSON.stringify(this.state.listitems));
    }

    render() {
        return (
            <div className="Todo-list">
                <ul>
                    {
                        this.props.items ? (
                            this.props.items.map((item, index) => <li key={index}>
                                <span className="check-box"></span>{item}
                                <span className="check">
                                    <i className="icon-check-solid"></i></span>
                                <span className="delete" onClick={e => this.deleteItem(e)}>
                                    <i className="icon-times-solid"></i></span>
                            </li>
                            )
                        ) : (
                                <span className="error">localStorage no data !</span>
                            )
                    }
                </ul>
            </div>
        )
    }
}