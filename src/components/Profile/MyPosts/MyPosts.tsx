import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


let postsData = [
    {id: 1 , message: 'Hi', likes: 6},
    {id: 2 , message: 'Bonjour', likes: 5}
]


export const MyPosts = () => {
    return <div>
        <div className={s.posts}>MyPost
            <div><textarea name="text"></textarea></div>
            <button>Add Post</button>
            <Post message={postsData[0].message} likes={postsData[0].likes}/>
            <Post message={postsData[1].message} likes={postsData[1].likes}/>
        </div>
    </div>
}
