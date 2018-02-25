import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, RaisedButton, Card, CardHeader, Slider, Tabs, Tab } from 'material-ui';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const showTab = {
    display: 'block',
};
const hideTab = {
    display: 'none',
};

class Header extends Component {
  render() {
    const { show, onSectionClicked } = this.props
    return (
      <Tabs style={ this.props.show === true ? showTab : hideTab }>
   <Tab label={this.props.profileData.names[0]}
   onActive={() => onSectionClicked(this.props.profileData.names[0]) } >
     <div>
     </div>
   </Tab>
   <Tab label={this.props.profileData.names[1]}
   onActive={() => onSectionClicked( this.props.profileData.names[1]) } >
     <div>
     </div>
   </Tab>
   <Tab
     label={this.props.profileData.names[2]}
     onActive={() => onSectionClicked( this.props.profileData.names[2]) } >
     <div>
     </div>
   </Tab>
 </Tabs>
    );
  }
}

export default Header;
