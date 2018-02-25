import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleToggle from './TitleToggle';
import TableFilter from './TableFilter';

const App = () => (
  <MuiThemeProvider>
    <div>
      <TitleToggle />
      <TableFilter />
    </div>
  </MuiThemeProvider>
)
 
export default App
