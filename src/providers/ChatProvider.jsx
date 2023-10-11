import React from 'react'
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { messageCreator } from "../state";
import { bindActionCreators } from "redux";

const ChatProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { newMessage } = bindActionCreators(messageCreator, dispatch);

    const openPusherSocket = () => {
        if (window.pusher)
            return false

        window.pusher = {}
        const pusher = new Pusher(
            process.env.REACT_APP_PUSHER_KEY,
            {
                cluster: process.env.REACT_APP_PUSHER_CLUSTER,
                authEndpoint: process.env.REACT_APP_SOCKET_URL
            });

        pusher.subscribe(`chat-channel`)
            .bind("chat-channel",
                (data) => {
                    newMessage({
                        id: data.senderId,
                        name: data.senderName,
                        message: data.message,
                        sentAt: data.sent_at,
                    })
                })

    }
    openPusherSocket();

    return (
        <>{children}</>
    )
}

export default ChatProvider