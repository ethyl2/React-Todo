// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render () {
        if (this.props.todos) {
        return (
            <ul>
                {this.props.todos.map((todo, index)=> {
                    if (todo.display) {
                        return (
                                <li key={todo.id}
                                onClick={this.props.handleClick}
                                id={todo.id} >
                                    <Todo todo={todo}
                                    index={index} 
                                    />
                                </li>
                            )
                    } else {
                        return null;
                    }
                } 
                )}
            </ul>
        )
    } else {
        return null;
    }
}
}

export default TodoList;