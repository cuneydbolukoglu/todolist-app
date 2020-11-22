import React, { Component } from 'react';

export default class Todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    deleteItem(index, event) {

        let todolist = this.props.data;
        //const newData = data.filter(item => item.id !== clickedID)
    }

    render() {
        return (
            <div className="Todo-list">
                <ul>
                    {
                        this.props.data ? (
                            this.props.data.map((item, index) => <li key={index}>
                                <span className="check-box"></span>{item.name}
                                <span className="check">
                                    <i className="icon-check-solid"></i></span>
                                <span className="delete" onClick={event => this.deleteItem(index,event)}>
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