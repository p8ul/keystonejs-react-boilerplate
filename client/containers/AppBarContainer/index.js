import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Appbar from '../../components/Appbar';

export class AppBarContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  state = {
    activeMenuItem: 0,
    menuItems: [
      { name: 'Todo', path: '/list' },
      { name: 'Anaa Page', path: '/add' },
    ],
  }

  goTo = (path, activeMenuItem) => {
    const { history } = this.props;
    history.push(path);
    this.setState({ activeMenuItem });
  }

  render() {
    const { activeMenuItem, menuItems } = this.state;
    return (
      <Appbar
        activeMenuItem={activeMenuItem}
        menuItems={menuItems}
        goTo={this.goTo}
      />
    );
  }
}


export default withRouter(AppBarContainer);
