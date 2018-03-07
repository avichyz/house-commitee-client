import React, { Component } from 'react';
import { Segment, Menu, Icon, Sidebar } from 'semantic-ui-react'
// import Sidebar from '../components/Sidebar/Sidebar';
import { Route, Link } from 'react-router-dom'
import ResidentsContainer from '../modules/residents/ResidentsContainer';
import GalleryContainer from '../modules/gallery/GalleryContainer';
import Building from '../modules/buildingLayout/building/Building';
import ForumContainer from '../modules/forum/ForumContainer';
import AboutContainer from '../modules/about/AboutContainer';
import store from '../store';
import { push } from 'react-router-redux'
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

  componentDidMount() {
    store.dispatch(push('/about'))
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
          <h1 className={styles.appTitle}>שדרות לכיש 65</h1>
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
            <Link to="/residents" onClick={this.handleSidebarClose}>
              <Menu.Item name='residents'>
                <Icon name='users' />
                דיירים
            </Menu.Item>
            </Link>
            <Link to="/building" onClick={this.handleSidebarClose}>
              <Menu.Item name='building'>
                <Icon name='users' />
                הזנת תשלומים
            </Menu.Item>
            </Link>
            <Link to="/messages" onClick={this.handleSidebarClose}>
              <Menu.Item name='messages'>
                <Icon name='users' />
                הודעות
            </Menu.Item>
            </Link>
            <Link to="/floors" onClick={this.handleSidebarClose}>
                <Menu.Item name='floors'>
                  <Icon name='users' />
                  ניהול קומות
            </Menu.Item>
            </Link>
            <Link to="/gallery" onClick={this.handleSidebarClose}>
              <Menu.Item name='gallery'>
                <Icon name='image' />
                גלריה
            </Menu.Item>
            </Link>
            <Link to="/about" onClick={this.handleSidebarClose}>
              <Menu.Item name='about'>
                <Icon name='home' />
                Home
            </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher 
          className={styles.content}
          onClick={this.handleSidebarClose}>
            <Segment basic className={styles.container}>
            {/* perhsaps use sticky => ? => <div className={styles.rightSideDiv}></div> */}
              <Route exact path="/residents" component={ResidentsContainer} />
              <Route exact path="/building" component={Building} />
              <Route exact path="/messages" component={ForumContainer} />
              <Route exact path="/gallery" component={GalleryContainer} />
              <Route exact path="/about" component={AboutContainer} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;
