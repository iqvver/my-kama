import React, { Component, Suspense } from 'react'
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import classes from './App.css';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer"
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import { Box } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress'
import { Paper } from '@material-ui/core';

/* lazy off
//import UsersContainer from './components/Users/UsersContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import Music from './components/Music/Music';
//import News from './components/News/News';
//import Setting from './components/Setting/Setting';
//import Nav from './Nav/Nav';
//import ProfileContainer from './Profile/ProfileContainer';
//import HeaderContainer from './Header/HeaderContainer';
//import Login from './components/Login/Login'
*/

//lazy on
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'))
const Music = React.lazy(() => import('./components/Music/Music'))
const News = React.lazy(() => import('./components/News/News'))
const Setting = React.lazy(() => import('./components/Setting/Setting'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const HeaderContainer = React.lazy(() => import('./Header/HeaderContainer'))
const Nav = React.lazy(() => import('./Nav/Nav'))
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))



class App extends Component {
  componentDidMount() { this.props.initializeApp(); }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      //Не забыть сделать нормальную крутилку
      <Suspense fallback={<Box><LinearProgress /></Box>}>
        <Paper className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <Box className='app-wrapper-content'>
            <Route path='/dialogs' render={() => { return <DialogsContainer /> }} />
            <Route path='/profile/:userId?' render={() => { return <ProfileContainer /> }} />
            <Route path='/users' render={() => { return <UsersContainer /> }} />
            <Route path='/login' render={() => { return <Login /> }} />
            <Route path='/news' render={() => { return <News /> }} />
            <Route path='/music' render={() => { return <Music /> }} />
            <Route path='/setting' render={() => { return <Setting /> }} />
          </Box>
        </Paper>
      </Suspense>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);