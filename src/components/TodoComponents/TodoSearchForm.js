import React, { Component } from 'react';

class TodoSearchForm extends Component {
    render () {
        return (
            <form>
            <label htmlFor='search'>Search Your Todos</label>
            <input type='text'
                placeholder='search term'
                id='search'
                name='search'
                value={this.props.searchTerm}
                onChange={this.props.handleSearchChange}
                />
            </form>
        )
    }
}

export default TodoSearchForm; 