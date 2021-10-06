import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../redux/profile-reducer'
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Box } from '@mui/system';

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile();
        }
    }
    render() {
        return (
            <Box>
                <Profile {...this.props} profile={this.props.profile}
                    isOwner={!!this.props.match.params.userId} //владелец страници или нет
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile} />
            </Box>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});
export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile }), withRouter, withAuthRedirect
)(ProfileContainer);