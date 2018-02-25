import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableExampleComplex from '../../components/Table';
import LeftMenu from '../../components/LeftMenu';
import { Provider, connect } from 'react-redux'


function mapToTable(state) {
  return {
    data: state.tabContent.data
  }
}
function mapLeftMenuToState(state) {
  return {
    data: state.onChangeLeftMenuList.data,
    show: state.tabVisibilty.toggle
  }
}
const TableContent = connect(
  mapToTable
)(TableExampleComplex)


const LeftMenuState = connect(
  mapLeftMenuToState
)(LeftMenu)

class TableFiter extends Component {
  render() {
    return (
      <div>
      <LeftMenuState/>
        <TableContent/>
      </div>
    );
  }
}


export default TableFiter;
