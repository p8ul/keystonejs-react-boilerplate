import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const logo = require('../../assets/images/logo.png');

const AppBar = ({ activeMenuItem, menuItems, goTo }) => (
  <React.Fragment>
    <div className="pusher inverted">
      <div className="ui menu custom_menu asd borderless">
        <div className="item openbtn">
          <i className="icon content" />
        </div>
        <div className="item with-logo">
          <Image className="logo" src={logo} />
          <span className="logo">Logo</span>
        </div>
        {menuItems.map((item, index) => (
          <MenuItem
            active={index === activeMenuItem}
            onClick={() => goTo(item.path, index)}
            item={item}
            key={item.name}
          />
        ))}

        <div className="right menu">
          <div className="item">
            <Icon name="heartbeat" color="orange" />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

AppBar.propTypes = {
  goTo: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeMenuItem: PropTypes.number.isRequired,
};
export default AppBar;
