import React from 'react';
import { Grid } from 'semantic-ui-react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = ({ ...props }) => (
  <div>
    <p>This is a simple todo list.</p>

    <Grid columns={2} padded>
      <Grid.Column>
        <TodoForm {...props} />
      </Grid.Column>
      <Grid.Column>
        <TodoList {...props} />
      </Grid.Column>
    </Grid>
  </div>
);

export default Todo;
