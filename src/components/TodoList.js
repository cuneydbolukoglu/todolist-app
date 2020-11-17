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
                        this.props.items.map((item, index) => <li key={index}>
                            <span className="check-box"></span>{item}<span className="delete"><i className="icon-times-solid"></i></span>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}