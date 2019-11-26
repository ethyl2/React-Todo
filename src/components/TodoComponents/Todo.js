import React, { Component } from 'react';

class Todo extends Component {
    
    render () {
        if (this.props.todo.display) {
        return <h2>{this.props.todo.task}</h2>
        } else {
            return <h2>filtered out</h2>
        }
    }
}

export default Todo;