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
            <div>
                <Field name='newPostText'
                    component={Textarea}
                    placeholder='Enter your message'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(AddPostForm);

const MyPosts = React.memo(props => {
    console.log('render');
    let postsElements =
        props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount} />);
    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }
    
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;