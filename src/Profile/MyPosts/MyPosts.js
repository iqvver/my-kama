import { Box } from '@mui/system'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../components/common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/Validators/Validators'
import classes from './MyPosts.module.css'
import Post1 from './Post/Post'

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Box>
                <Field name='newPostText'
                    component={Textarea}
                    placeholder='Enter your message'
                    validate={[required, maxLength10]}
                />
            </Box>
            <Box>
                <button>Add Post</button>
            </Box>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(AddPostForm);

const MyPosts = React.memo(props => {
    let postsElements = 
        [...props.posts].reverse().map(p => <Post1 message={p.message} likesCount={p.likesCount} />);
    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }
    
    return (
        <Box className={classes.postsBlock}>
            <h3>My posts</h3>
            <Box>
                <AddPostFormRedux onSubmit={addNewPost} />
            </Box>
            <Box className={classes.posts}>
                {postsElements}
            </Box>
        </Box>
    )
});

export default MyPosts;