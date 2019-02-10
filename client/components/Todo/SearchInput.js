import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const SearchInput = ({ searchText, handleSearchChange }) => (
  <Input onChange={handleSearchChange} icon="search" value={searchText} placeholder="Search..." fluid />
);
SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
export default SearchInput;
