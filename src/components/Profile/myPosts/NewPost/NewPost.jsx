import React from 'react';

const NewPost = (props) => {

        let newPostElement = React.createRef();
        let addPost = ()=> {
            debugger;
                let text = newPostElement.current.value;

                   props.addPost(text)
        }
    return (
        <div>
            <h3>New post</h3>
            <textarea ref={newPostElement} cols="25" rows="4"></textarea>
            <button onClick={addPost}>Add Post
            </button>
        </div>
    );

}

export default NewPost;