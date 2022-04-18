import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css';

export const Profile = () => {
    return <div className={s.item}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png"
            alt="imageOfHeader"/>
        <div> AVA + DESCRIPTION</div>
        <MyPosts/>
    </div>
}
