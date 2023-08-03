import React from 'react';
import { useTodoContext } from './TodoContext';
import { styled } from 'styled-components'

const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  const toggleCompleted = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: taskId });
  };

  const handleFilterChange = (filterType) => {
    dispatch({ type: 'SET_FILTER', payload: filterType });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'completed') {
      return task.completed;
    } else if (state.filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  return (
    <Container>
      <div>
        <Button onClick={() => handleFilterChange('all')}>All</Button>
        <Button onClick={() => handleFilterChange('completed')}>Completed</Button>
      </div>
      <Ul> 
        {filteredTasks.map((task) => (
            <div>
          <Li key={task.id}>
            <Input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <Span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </Span>
          </Li>
          </div>
        ))}
      </Ul>
    </Container>
  );
};

const Input = styled('input')`
    padding: 8px;
    font-size: 16px;


`
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
const Ul = styled('ul')`
    list-style-type: none;
    padding: 0;
`
const Li = styled('li')`
    color: white; 
`


const Span = styled('span')`
    vertical-align: middle;
`

const Container = styled('div')`
    justify-content: center;
    display: flex;
`

export default TodoList;
