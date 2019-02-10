import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { Grid } from 'semantic-ui-react';

const PaginationSection = ({ todos, handlePageChange }) => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column width={10}></Grid.Column>
      <Grid.Column className="pagination-pages" width={3}>
          Page
        {' '}
        {todos.currentPage}
        {' '}
of
        {' '}
        {todos.totalPages}
      </Grid.Column>
      <Grid.Column width={3}>
        <Pagination
          activePage={todos.currentPage}
          itemsCountPerPage={5}
          totalItemsCount={todos.total}
          pageRangeDisplayed={1}
          onChange={handlePageChange}
          itemClassFirst="hidden"
          itemClassLast="hidden"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
PaginationSection.propTypes = {
  todos: PropTypes.shape({}).isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
export default PaginationSection;
