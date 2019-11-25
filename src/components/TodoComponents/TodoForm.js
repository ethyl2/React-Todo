import React, { Component } from 'react';

class TodoForm extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor='todo-imput'>Todo to Add:</label>
                    <input 
                        type='text' 
                        placeholder='todo to add'
                        name='todo'
                        id='todo-input'
                        onChange={this.props.handleChange}
                        />
                    <br />
                    <button type='submit'>Add Todo</button>
                    <br />
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;