import React, { Component } from 'react';

class Todo extends Component {
    render () {
        return (
            <div>
                <h2>{this.props.index+1}. {this.props.todo.task}</h2>
            </div>
        )
    }
}

export default Todo;