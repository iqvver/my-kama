import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './MyPosts.module.css'
import Post1 from './Post/Post'

const MyPosts = (props) => {
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
}
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                    component='textarea'
                    placeholder='Enter your message' />
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

export default MyPosts;