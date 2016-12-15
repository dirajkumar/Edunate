import React, { Component } from 'react';
import {
  Segment,
  Menu,
  Button,
  Icon,
  Grid,
  Sidebar,
  Header,
  Image
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSidebar, changeLink } from '../actions';

class AppHeader extends Component {

  showFullHeader( ) {
    return (
      <Grid.Row columns={1} only='computer'>
        <Grid.Column>
          <Segment inverted>
            <Menu pointing secondary inverted stackable>
              <Menu.Item name='home' active={this.props.activeLink === 'home'} onClick={() => this.props.changeLink('home')}>Home</Menu.Item>
              <Menu.Item name='about' active={this.props.activeLink === 'about'} onClick={() => this.props.changeLink('about')}>About</Menu.Item>
              <Menu.Item name='financials' active={this.props.activeLink === 'financials'} onClick={ () => this.props.changeLink('financials')}>Financials</Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Icon name='search' size='large'/>
                </Menu.Item>
                <Menu.Item>
                  <Button inverted>Log In</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button inverted>Sign Up</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }

  showShortHeader( ) {
    return (
      <Grid.Row columns={1} only='tablet mobile'>
        <Grid.Column>
          <Segment inverted>
            <Menu inverted>
              <Menu.Item onClick={ () => this.props.toggleSidebar(!this.props.showSideBar) }>
                <Icon name='sidebar' size='large'/>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Icon name='search' size='large'/>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }

  render( ) {
    return (
      <Grid>
        {this.showFullHeader( )}
        {this.showShortHeader( )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ showSideBar: state.header.showSideBar, activeLink: state.header.activeLink });

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleSidebar, changeLink }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (AppHeader);
