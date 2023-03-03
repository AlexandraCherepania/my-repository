import React, { Component } from 'react';
import TodoList from './components/components';

class App extends Component {
  state = {
    todos: 
      [
        {id: 1, text: 'Курс HTML', completed: false },
        {id: 1, text: 'Курс JavaScript', completed: false },
        {id: 1, text: 'Курс React', completed: false},
    ],
  };

  
  render() {
    return (<div>
      
      <h1>Список задач</h1>
      
      <TodoList todos={todos} />
    </div>
    );

  }

}

export default App;
