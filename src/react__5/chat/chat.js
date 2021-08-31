import React, { useMemo } from 'react'

import { Redirect, useParams } from 'react-router'

export default function Chats(props) {
    const { chatId } = useParams()
    const { yetIsChatExists } = props

    const chatExists = useMemo(() => yetIsChatExists(chatId), [yetIsChatExists, chatId]);

    if (!chatExists) {
        return <Redirect to="/chats" />
    }
    return <div>
        <p>certain chat page with {chatId}</p>

    </div>
}
