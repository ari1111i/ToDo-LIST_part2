import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';
import { styled } from 'styled-components'

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useTodoContext();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task, completed: false } });
      setTask('');
    }
  };

  return (
    <Container>
      <Input type="text" value={task} onChange={handleInputChange} />
      <Button onClick={addTask}>Add Task</Button>
    </Container>
  );
};

const Button = styled('button')`
    padding: 8px 12px;
    font-size: 16px;
    margin-right: 5px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
&:hover{
    background-color: #2980b9;
}
`
const Input = styled('input')`
   margin-right: 10px;
`
const Container = styled('div')`
    justify-content: center;
    display: flex;
`

export default TodoForm;
