import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type MessageType = {
    text: string;
}
type DialogItemType ={
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return  <div className={s.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export const MessageItem = (props: MessageType) => {
    return  <div className={s.message}>{props.text}</div>
}

let dialogsData = [
    {id: 1 , name: 'Vol'},
    {id: 2 , name: 'Dima'},
    {id: 3 , name: 'Peter'}
]

let messageData = [
    {id: 1 , message: 'Hi'},
    {id: 2 , message: '2 Hi'},
    {id: 3 , message: '3 Hi'}
]

export const Dialogs = (props: MessageType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <MessageItem text={messageData[0].message} />
                <MessageItem text={messageData[1].message} />
                <MessageItem text={messageData[2].message} />
            </div>
        </div>
    )

}
