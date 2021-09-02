import React from 'react';
import './App.css';

//Importing components
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
     <header>
      <h1>Personal Todo List</h1>
    </header>
    <Form />
    <TodoList />
    </div>
  );
}

export default App;
