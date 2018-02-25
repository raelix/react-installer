import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  menu: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

class LeftMenu extends Component {
  render() {
    const { data, show } = this.props
    return (
      <div>
        <Paper style={ this.props.show === true ? style.paper : style.hide }>
          <Menu style={style.menu}>
          {
            data.map(
            function(row, index){
            return  index != 0 ?  (
              <MenuItem
              key={index}
              primaryText={row.name}
              />) :  null
            }
          )
        }
          </Menu>
        </Paper>
      </div>
    );
  }
}

export default LeftMenu;
