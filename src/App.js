import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


/*
const sample data = [
  {
    task: 'Organize Garage',
    id: 1528817077286, //Date.now()
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
 */
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state

  //App is the container for the Todo Components. 

  constructor() {
    super();
    this.state = {
      todos: [
        {
        task: 'Organize Garage',
        id: 1528817077286, //Date.now()
        completed: false
        },
        {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
        }
      ]
    }
  }
  handleChange = event => console.log(event.target.value);
  
  handleSubmit = event => {
    event.preventDefault();
    let newTodo = {
      task: event.target.todo.value,
      id: Date.now(),
      completed: false
    }
    let updatedTodos = [...this.state.todos, newTodo];
    this.setState({...this.state, todos:updatedTodos});
  }

  handleClick = event => {
    event.target.classList.add('completed');
    const targetId = Number(event.target.id);
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === targetId) {
        return {...todo, completed:true}
      } else {
        return todo;
      }
    });
    this.setState({...this.state, todos:updatedTodos});
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to the Todo App!</h2>
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <TodoList todos={this.state.todos} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
