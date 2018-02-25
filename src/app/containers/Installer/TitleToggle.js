import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Header from '../../components/Header';
import Title from '../../components/Title';
import {clickLeftMenu} from '../../actions';

var menuLabel = {
  'names': [ 'EMS', 'E-XMS', 'Intellisight' ],
  'show': true
}

function titleClickDispatcher(dispatch) {
  return {
    onClickLeftMenu: () => dispatch(clickLeftMenu)
  }
}

const TitleClick = connect(
  null,
  titleClickDispatcher
)(Title)


function onMenuSectionClicked(dispatch) {
  return {
    onSectionClicked: (section) => dispatch(section)
  }
}

function showMenu(state) {
  return {
    show: state.tabVisibilty.toggle
  }
}

const TabClick = connect(
  showMenu,
  onMenuSectionClicked
)(Header)

class TitleToggle extends Component {
  render() {
    return (
        <div>
        <TitleClick />
        <TabClick profileData={menuLabel} />
        </div>
    );
  }
}

export default TitleToggle;
