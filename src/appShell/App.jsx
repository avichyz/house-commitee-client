import React, { Component } from 'react';
import { Segment, Button, Menu, Icon, Sidebar } from 'semantic-ui-react'
// import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Link } from 'react-router-dom'
import UsersContainer from '../modules/users/UsersContainer';
import GalleryContainer from '../modules/gallery/GalleryContainer';
import AboutContainer from '../modules/about/AboutContainer';
import styles from './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  handleSidebarOpen() {
    this.setState({ sidebarOpen: true });
  }
  handleSidebarClose() {
    this.setState({ sidebarOpen: false });
  }
  toggleVisibility() {
    this.state.sidebarOpen ? this.handleSidebarClose() : this.handleSidebarOpen();
  }
  render() {
    const { sidebarOpen } = this.state
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Icon className={styles.userCircle} name='user circle' />
          <h1 className={styles.appTitle}>רהיטי רון</h1>
          <Icon
            className={styles.barsIcon}
            onClick={this.toggleVisibility}
            name='bars' />
        </header>
        <Sidebar.Pushable as={Segment} className={styles.sideBar}>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={sidebarOpen}
            icon='labeled'
            vertical
            inverted>
            <Link to="/users">
              <Menu.Item name='users'>
                <Icon name='users' />
                משתמשים
            </Menu.Item>
            </Link>
            <Link to="/gallery">
              <Menu.Item name='gallery'>
                <Icon name='image' />
                גלריה
            </Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item name='about'>
                <Icon name='home' />
                Home
            </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher 
          className={styles.content}
          onClick={this.handleSidebarClose}>
            <Segment basic>
              <Route exact path="/gallery" component={GalleryContainer} />
              <Route exact path="/users" component={UsersContainer} />
              <Route exact path="/about" component={AboutContainer} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;
