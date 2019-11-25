import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Footer from './components/Footer';
import './components/TodoComponents/Todo.css';
import christmasIntro from './audio/christmasIntro.mp3';
import bell from './audio/bell.wav';
import xmasnight from './images/xmasnight.jpg';

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
      audio: false,
      todos: [
        {
        task: 'Make a Christmas playlist',
        id: 1528817077286, //Date.now()
        completed: false
        },
        {
        task: 'Bake cookies',
        id: 1528817084358,
        completed: false
        },
        {
          task: 'Build a gingerbread house',
          id: 1528817084357,
          completed: false
        },
        {
          task: 'Decorate a tree',
          id: 1528817084356,
          completed: false
        },
        {
          task: 'Watch a Christmas movie',
          id: 1528817084355,
          completed: false
        },
        {
          task: 'Find a Santa hat and wear it',
          id: 1528817084354,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084353,
          completed: false
        },
        {
          task: 'Create a gift list',
          id: 1528817084352,
          completed: false
        },
        {
          task: 'Create a wish list',
          id: 1528817084351,
          completed: false
        },
        {
          task: 'Send Christmas cards',
          id: 1528817084350,
          completed: false
          },
      ]
    }
  }
  
  
  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      task: event.target.todo.value,
      id: Date.now(),
      completed: false
    }
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({...this.state, todos:updatedTodos});
  }

  clearCompleted = (event) => {
    const notCompletedTodos = this.state.todos.filter(todo => !todo.completed);
    this.setState({...this.state, todos:notCompletedTodos});
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
    if (this.state.audio) {
    const completedEl = document.querySelector('.completedSound');
    completedEl.play();
    }
  }

  allowAudio = () => {
    this.setState({...this.state, audio: true});
    const audioEl = document.querySelector('.audio-element');
    audioEl.play();

  }
  
  render() {
    return (
      <div>
        <div className='img-container'>
          <img src={xmasnight} alt='indoor Christmas scene' />
        </div>
        <h1>Let's Get Ready for Christmas!</h1>
        <button onClick={this.allowAudio}>Allow Audio</button>
        <audio className='audio-element'>
          <source src={christmasIntro}></source>
        </audio>
        <h2>What's left to do?</h2>
        <h3>Add your Christmas todos to the list.</h3>
        
        <TodoForm handleSubmit={this.handleSubmit} 
          clearCompleted={this.clearCompleted}
        />
        <p>Click on the ornaments once each item is complete.</p>
        <audio className='completedSound'>
          <source src={bell}></source>
        </audio>

        <TodoList todos={this.state.todos} 
          handleClick={this.handleClick} 
        />
       <Footer />
      </div>
    );
  }
}

export default App;
