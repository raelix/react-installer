import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import Title from '../../components/Title';
import tabVisibilty from '../../reducers';
import {clickLeftMenu} from '../../actions'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

var menuLabel = {
  'names': [ 'EMS', 'E-XMS', 'Intellisight' ],
  'show': true
}

const store = createStore(tabVisibilty)

function mapDispatchToProps(dispatch) {
  return {
    onClickLeftMenu: () => dispatch(clickLeftMenu)
  }
}

function mapStateToProps(state) {
  return {
    show: state.toggle
  }
}
const TitleAttach = connect(
  null,
  mapDispatchToProps
)(Title)

const HeaderAttach = connect(
  mapStateToProps
)(Header)

class Installer extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
        <div>
        <TitleAttach />
        <HeaderAttach profileData={menuLabel} />
        </div>
        </MuiThemeProvider>
        </Provider>
    );
  }
}

export default Installer;
