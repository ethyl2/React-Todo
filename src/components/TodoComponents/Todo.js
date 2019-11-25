import React, { Component } from 'react';

class Todo extends Component {
    render () {
        return (
            <div>
                <h2 id={this.props.todo.id} onClick={this.props.handleClick}>{this.props.index+1}. {this.props.todo.task}</h2>
            </div>
        )
    }
}

export default Todo;