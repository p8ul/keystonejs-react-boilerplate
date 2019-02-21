import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import PaginationSection from './PaginationSection';
import SearchInput from './SearchInput';

const TodoList = ({
  todos,
  removeTodo,
  handlePageChange,
  handleSearchChange,
  loading,
  setTodoDetails,
  searchText,
}) => (
  <React.Fragment>
    <SearchInput
      loading={loading}
      searchText={searchText}
      handleSearchChange={handleSearchChange}
    />
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
          <TodoItem
            key={todo._id}
            todo={todo}
            setTodoDetails={setTodoDetails}
            removeTodo={removeTodo}
          />
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
  loading: PropTypes.bool.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  setTodoDetails: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default TodoList;
