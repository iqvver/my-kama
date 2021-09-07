import React from 'react';
import { Route } from 'react-router-dom';
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

const App = () => {
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

export default App;
