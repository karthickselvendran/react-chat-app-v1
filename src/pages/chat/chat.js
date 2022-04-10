import React, { useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export const Chat = () => {
    const backEndUrl = "http://localhost:4000"

    useEffect(() => {
        socket = io(backEndUrl)
    }, [])

    return (
        <>
            <h3>Chat page</h3>
        </>
    )
}
