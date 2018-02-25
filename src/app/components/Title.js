import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

class Title extends React.Component {
  render() {
    const { onClickLeftMenu } = this.props
    return (
      <AppBar
        onLeftIconButtonClick={onClickLeftMenu}
        title="Installer"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default Title;
