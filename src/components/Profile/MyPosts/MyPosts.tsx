import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        <div className={s.posts}>MyPost
            <div><textarea name="text"></textarea></div>
            <button>Add Post</button>
            <Post message = 'Hi' likes={6}/>
            <Post message = 'Bonjour' likes={5}/>
        </div>
    </div>
}
