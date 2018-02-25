import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableExampleComplex from '../../components/Table';
import { Provider, connect } from 'react-redux'


var tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

function mapToTable(state) {
  return {
    datas: state.tabContent.datas
  }
}
const TableContent = connect(
  mapToTable
)(TableExampleComplex)



export default TableContent;
