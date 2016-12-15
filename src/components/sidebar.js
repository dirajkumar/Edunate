import React, { Component } from 'react';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';
import { connect } from 'react-redux';

class AppSideBar extends Component {
  render( ) {
    console.log('this.props.showSideBar==', this.props.showSideBar);
    return (
      <Sidebar as={Menu} animation='push' width='thin' visible={this.props.showSideBar} icon='labeled' vertical inverted>
        <Menu.Item name='home'>
          <Icon name='home'/>
          Home
        </Menu.Item>
        <Menu.Item name='gamepad'>
          <Icon name='gamepad'/>
          Games
        </Menu.Item>
        <Menu.Item name='camera'>
          <Icon name='camera'/>
          Channels
        </Menu.Item>
      </Sidebar>
    );
  }
}
const mapStateToProps = (state) => ({ showSideBar: state.header.showSideBar });

export default connect(mapStateToProps)(AppSideBar);
