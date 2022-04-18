import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likes: number
}

export const Post = (props: PostType) => {
    return <div className={s.item}>
        <img src="https://image.shutterstock.com/image-vector/human-head-shape-vector-icon-260nw-1906303270.jpg"
             alt="PostImage"/>
        <span>{props.message}</span>
        <div>{props.likes} likes</div>
    </div>
}
