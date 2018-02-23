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

const hide = {
    display: 'none',
};


function handleActive(tab) {
}

class Header extends Component {
  render() {
    const { show } = this.props
    return (
      <Tabs style={ !this.props.show ? hide : ''}>
   <Tab label={this.props.profileData.names[0]}
   onActive={handleActive}>
     <div>
       <h2 style={styles.headline}>{this.props.profileData.names[0]}</h2>
     </div>
   </Tab>
   <Tab label={this.props.profileData.names[1]}
   onActive={handleActive}>
     <div>
       <h2 style={styles.headline}>{this.props.profileData.names[1]}</h2>
     </div>
   </Tab>
   <Tab
     label={this.props.profileData.names[2]}
     onActive={handleActive}>
     <div>
       <h2 style={styles.headline}>{this.props.profileData.names[2]}</h2>
     </div>
   </Tab>
 </Tabs>
    );
  }
}

export default Header;
