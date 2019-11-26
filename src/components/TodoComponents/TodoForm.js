import React, { Component } from 'react';

class TodoForm extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor='todo-imput'>Todo to Add:</label>
                    <input 
                        type='text' 
                        placeholder=' next festive & fun item'
                        name='todo'
                        id='todo-input'
                        />
                    
                    <button type='submit'>Add Todo</button>
                        
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;