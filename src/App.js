import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Nav from './Nav/Nav';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer"
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

class App extends Component {
  componentDidMount() { this.props.initializeApp(); }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);