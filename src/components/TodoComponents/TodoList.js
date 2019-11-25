// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render () {
        return (
            <div>
                {this.props.todos.map((todo, index)=> {
                    return (
                        <ul key={todo.id}>
                           <li>
                               <Todo todo={todo} 
                                    index={index} 
                                    handleClick={this.props.handleClick}/>
                            </li>
                        </ul>
                        )
                    }
                )}
            </div>
        )
    }
}

export default TodoList;