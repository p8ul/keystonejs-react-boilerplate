import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import PaginationSection from './PaginationSection';
import SearchInput from './SearchInput';

const TodoList = ({
  todos, removeTodo, handlePageChange, handleSearchChange, loading,
}) => (
  <React.Fragment>
    <SearchInput loading={loading} handleSearchChange={handleSearchChange} />
    <Table striped className="animated fadeInRight">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {todos.results.map(todo => (
          <TodoItem key={todo._id} todo={todo} removeTodo={removeTodo} />
        ))}
      </Table.Body>
    </Table>
    <PaginationSection todos={todos} handlePageChange={handlePageChange} />
  </React.Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.shape({}).isRequired,
  removeTodo: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default TodoList;
