import React from 'react';

function NewPost(props) {
  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div>
      <h3>New post</h3>
      <textarea ref={newPostElement} cols="25" rows="4" />
      <button onClick={addPost}>
        Add Post
      </button>
    </div>
  );
}

export default NewPost;
