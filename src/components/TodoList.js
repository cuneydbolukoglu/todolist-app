import React, { Component } from 'react';

export default class Todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    deleteItem(id) {

        this.setState({
            data: this.props.data.filter(item => item.id !== id)
        })

        console.log(id)
    }

    componentDidUpdate(){
        localStorage.setItem("todo", JSON.stringify(this.state.data));
    }

    render() {
        return (
            <div className="Todo-list">
                <ul>
                    {
                        this.props.data.map((item, index) => <li key={index}>
                            <span className="check-box"></span>{item.name}
                            <span className="check">
                                <i className="icon-check-solid"></i></span>
                            <span className="delete" onClick={this.deleteItem.bind(this, item.id)}>
                                <i className="icon-times-solid"></i></span>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}