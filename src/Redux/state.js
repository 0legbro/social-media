import {rerenderEntireTree} from "../render";

let state ={
    profilePage: {
        posts: [
            {id:0, post: "I like this." , likesCount: 10},
            {id:1,  post: "I dislike this." , likesCount: 12}
        ]
    },
    dialogsPage :{
        dialogs : [
            {id:1, name:"Sasha"},
            {id:2, name:"Oleh"},
            {id:3, name:"Yuriy"},
            {id:4, name:"Alina"},
            {id:5, name:"Dasha"}
        ],
        messages: [
            {id:1, message:"Hello"},
            {id:2, message:"How are you?"},
            {id:3, message:"Do you want to walk?"},
            {id:4, message:"Yes, we can!"},
            {id:5, message:"I love you..."}
        ]

    }

}

export let addPost =(postMessage) =>{
    debugger;
    let newPost ={
        id: state.profilePage.posts.length,
        post: postMessage,
        likesCount: 0

    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;