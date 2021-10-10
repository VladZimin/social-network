import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormControls";

let maxLength10 = maxLengthCreator(10)
let MyPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='post' validate={[required, maxLength10]} placeholder='Enter text...' component={TextArea}/>
            <button>Отправить</button>
        </form>
    )
}

MyPostForm = reduxForm({form: 'myPosts'})(MyPostForm)

const MyPosts = props => {
    let postElements = props.postData
        .map(p => <Post message={p.message} likes={p.likes}/>)

    let onSubmit = (data, dispatch) => {
        props.addPost(data.post)
        dispatch(reset('myPosts'))
    }


    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <MyPostForm onSubmit={onSubmit}/>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts