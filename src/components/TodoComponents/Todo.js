import React, { Component } from 'react';

class Todo extends Component {
    render () {
        return (
                <h2>
                {this.props.todo.task}
                </h2>
        )
    }
}

export default Todo;