import React, { Component } from 'react';
import Todos from './todos';
import AddForm from './AddForm';

class App extends Component {

  state = {
    todos : [
      {id : 1 , content : 'Add Some Tasks. Click on me to cancel.'}
    ]
  }

  deleteTodo = (id) => {
      const todos = this.state.todos.filter( todo => {
        return todo.id !== id;
      });
      this.setState({todos});
  }

  addTodo = (content) => {
    let todo = {
      id :  Math.random(), 
      content : content
    }
    const todos = [...this.state.todos, todo];
    this.setState({todos});

  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo</h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo= {this.deleteTodo}  />
      </div>
    );
  }
}

export default App;
