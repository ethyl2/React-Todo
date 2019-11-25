// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render () {
        return (
            <ul>
                {this.props.todos.map((todo, index)=> {
                    return (
                            <li key={todo.id}
                            onClick={this.props.handleClick}
                            id={todo.id} >
                                <Todo todo={todo}
                                index={index} 
                                />
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }
}

export default TodoList;