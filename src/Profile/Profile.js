import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Box } from '@mui/system'

const Profile = (props) => {
    return (
        <Box>
            <ProfileInfo profile={props.profile} 
                         status={props.status} 
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto} />
            <MyPostsContainer />
        </Box>
    )
}

export default Profile;
