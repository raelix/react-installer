import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableExampleComplex from '../../components/Table';
import { Provider, connect } from 'react-redux'


function mapToTable(state) {
  return {
    data: state.tabContent.data
  }
}
const TableContent = connect(
  mapToTable
)(TableExampleComplex)



export default TableContent;
