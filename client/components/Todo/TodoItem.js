import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'semantic-ui-react';

const TodoItem = ({ todo, removeTodo }) => (
  <Table.Row className="animated fadeIn">
    <Table.Cell>{todo.title}</Table.Cell>
    <Table.Cell>{todo.description}</Table.Cell>
    <Table.Cell>
      <div className="ui cursor pointing">
        <Icon name="trash" onClick={() => removeTodo(todo._id)} />
      </div>
    </Table.Cell>
  </Table.Row>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({}).isRequired,
  removeTodo: PropTypes.func.isRequired,
};
export default TodoItem;
