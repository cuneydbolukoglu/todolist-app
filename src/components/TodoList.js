import React, { Component } from 'react';

export default class Todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Todo-list">
                <ul>
                    {
                        this.props.data ? (
                            this.props.data.map((item, index) =>
                                <li className={item.completed ? 'check-active' : ''} key={index}>
                                    <span className="check-box"></span>{item.name}
                                    <span className="check" onClick={this.props.checkItem.bind(this, item.id)}>
                                        <i className="icon-check-solid"></i></span>
                                    <i className="icon-times-solid delete" title="deleteItem" onClick={this.props.deleteItem.bind(this, item.id)} ></i>
                                </li>
                            )) : (
                                <div>null</div>
                            )
                    }
                </ul>
            </div>
        )
    }
}