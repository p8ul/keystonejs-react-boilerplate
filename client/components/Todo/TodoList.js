import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <Table striped className="animated fadeInRight">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </Table.Body>
  </Table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default TodoList;
