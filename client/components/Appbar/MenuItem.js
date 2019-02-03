import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
  item, active, onClick,
}) => (
  <React.Fragment>
    <div className={active ? 'item active' : 'title item'} role="presentation" onClick={onClick}>
      <span>{item.name}</span>
    </div>

  </React.Fragment>
);

MenuItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
