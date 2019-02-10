import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const SearchInput = ({ searchText, handleSearchChange, loading }) => (
  <Input loading={loading} onChange={handleSearchChange} icon="user" value={searchText} placeholder="Search..." fluid />
);

export default SearchInput;
