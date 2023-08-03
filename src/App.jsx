import React from 'react';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { TodoProvider } from './components/todo/TodoContext';
import './App.css'
import { styled } from 'styled-components'

function App() {
  return (
    <TodoProvider>
      <Div>
        <H1>ToDo-List</H1>
        <TodoForm />
        <TodoList />
        
      </Div>
    </TodoProvider>
  );
}


const H1 = styled('h1')`
    text-align: center;
    color: white;
`

const Div = styled('div')`
    background-color: #4220a8;
    height: 850px;
    margin-top: -40px;

`

export default App;
