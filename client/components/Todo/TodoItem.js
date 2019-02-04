import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const TodoItem = ({ todo }) => (
  <Table.Row>
    <Table.Cell>{todo.title}</Table.Cell>
    <Table.Cell>{todo.description}</Table.Cell>
    <Table.Cell>
        ....
    </Table.Cell>
  </Table.Row>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({}).isRequired,
};
export default TodoItem;
