import React, { Component } from 'react';
import { Container, Header, Image, Segment, Sidebar, Grid } from 'semantic-ui-react';

import AppHeader from './header';
import AppSideBar from './sidebar';

export default class App extends Component {
  render( ) {
    return (
      <Sidebar.Pushable>
        <AppSideBar/>
        <Sidebar.Pusher>
          <AppHeader/>
            <Header as='h3'>Application Content</Header>
            <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
