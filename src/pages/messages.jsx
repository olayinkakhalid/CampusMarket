import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import {
    Search,
    Send,
    MoreVertical,
    ArrowLeft,
    Paperclip,
    CheckCheck,
    MessageCircle
} from 'lucide-react'


const conversations = [
    {
        id: 1,
        name: 'Ava Carter',
        initials: 'AC',
        item: 'Calculus: Early Transcendentals',
        lastMessage: 'Is this still available?',
        time: '10:42 AM',
        unread: 2,
        online: true,
        messages: [
            {
                id: 1,
                sender: 'them',
                text: 'Hi! Is the calculus book still available?',
                time: '10:38 AM'
            },
            {
                id: 2,
                sender: 'me',
                text: 'Yes, it is still available.',
                time: '10:40 AM'
            },
            {
                id: 3,
                sender: 'them',
                text: 'Is this still available?',
                time: '10:42 AM'
            }
        ]
    },
    {
        id: 2,
        name: 'Marcus Lee',
        initials: 'ML',
        item: 'AirPods Pro (2nd gen)',
        lastMessage: 'Can we meet around West Hall?',
        time: 'Yesterday',
        unread: 0,
        online: false,
        messages: [
            {
                id: 1,
                sender: 'me',
                text: 'Are the AirPods still available?',
                time: 'Yesterday'
            },
            {
                id: 2,
                sender: 'them',
                text: 'Yes, they are.',
                time: 'Yesterday'
            },
            {
                id: 3,
                sender: 'me',
                text: 'Can we meet around West Hall?',
                time: 'Yesterday'
            }
        ]
    },
    {
        id: 3,
        name: 'Priya Shah',
        initials: 'PS',
        item: 'IKEA desk lamp',
        lastMessage: 'Perfect, thanks!',
        time: 'Mon',
        unread: 0,
        online: true,
        messages: [
            {
                id: 1,
                sender: 'them',
                text: 'Does the lamp come with the bulb?',
                time: 'Mon'
            },
            {
                id: 2,
                sender: 'me',
                text: 'Yes, it comes with the warm LED bulb.',
                time: 'Mon'
            },
            {
                id: 3,
                sender: 'them',
                text: 'Perfect, thanks!',
                time: 'Mon'
            }
        ]
    },
    {
        id: 4,
        name: 'Jonah Williams',
        initials: 'JW',
        item: 'Trek hybrid bike',
        lastMessage: 'I can pick it up tomorrow.',
        time: 'Sun',
        unread: 0,
        online: false,
        messages: [
            {
                id: 1,
                sender: 'them',
                text: 'Would tomorrow work for pickup?',
                time: 'Sun'
            },
            {
                id: 2,
                sender: 'me',
                text: 'Yes, tomorrow works for me.',
                time: 'Sun'
            },
            {
                id: 3,
                sender: 'them',
                text: 'I can pick it up tomorrow.',
                time: 'Sun'
            }
        ]
    }
]


const Messages = () => {

    const [selectedConversation, setSelectedConversation] = useState(conversations[0])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [showChat, setShowChat] = useState(false)

    const [chatMessages, setChatMessages] = useState(
        conversations.reduce((acc, conversation) => {
            acc[conversation.id] = conversation.messages
            return acc
        }, {})
    )


    const filteredConversations = conversations.filter((conversation) =>
        conversation.name.toLowerCase().includes(search.toLowerCase()) ||
        conversation.item.toLowerCase().includes(search.toLowerCase())
    )


    const openConversation = (conversation) => {
        setSelectedConversation(conversation)
        setShowChat(true)
    }


    const sendMessage = () => {

        if (!message.trim()) return

        const newMessage = {
            id: Date.now(),
            sender: 'me',
            text: message.trim(),
            time: 'Now'
        }

        setChatMessages((prev) => ({
            ...prev,
            [selectedConversation.id]: [
                ...prev[selectedConversation.id],
                newMessage
            ]
        }))

        setMessage('')
    }


    const currentMessages =
        chatMessages[selectedConversation.id] || []


    return (
        <div className="bg-[#FAF8F4] min-h-screen px-4 sm:px-6 lg:px-8 py-5 sm:py-7">

            <Breadcrumb />


            {/* Heading */}

            <div className="mt-3">

                <h1 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
                    Messages
                </h1>

                <p className="text-xs text-[#6B6B6B] mt-2">
                    Chat with buyers and sellers on CampusMarket.
                </p>

            </div>


            {/* Main messages area */}

            <div className="mt-6 bg-white border border-[#E5E2DC] rounded-xl overflow-hidden h-[650px] flex">


                {/* Conversation sidebar */}

                <div
                    className={`
                        w-full md:w-[330px] lg:w-[360px]
                        border-r border-[#E5E2DC]
                        flex flex-col
                        ${showChat ? 'hidden md:flex' : 'flex'}
                    `}
                >

                    {/* Search */}

                    <div className="p-4 border-b border-[#E5E2DC]">

                        <div className="relative">

                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]" />

                            <input
                                type="text"
                                placeholder="Search conversations..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-10 pl-9 pr-3 bg-[#FAF8F4] border border-[#E5E2DC] rounded-lg text-sm text-[#2C2C2C] outline-none focus:border-[#C67A52] transition-colors"
                            />

                        </div>

                    </div>


                    {/* Conversation count */}

                    <div className="px-4 py-3 flex items-center justify-between">

                        <p className="text-xs font-semibold text-[#2C2C2C]">
                            Conversations
                        </p>

                        <p className="text-xs text-[#9A9A9A]">
                            {filteredConversations.length}
                        </p>

                    </div>


                    {/* Conversations */}

                    <div className="flex-1 overflow-y-auto">

                        {filteredConversations.length > 0 ? (

                            filteredConversations.map((conversation) => (

                                <button
                                    key={conversation.id}
                                    onClick={() => openConversation(conversation)}
                                    className={`
                                        w-full text-left px-4 py-3
                                        flex gap-3
                                        border-b border-[#F0EDE8]
                                        cursor-pointer
                                        transition-colors
                                        ${
                                            selectedConversation.id === conversation.id
                                                ? 'bg-[#F5F2EC]'
                                                : 'hover:bg-[#FAF8F4]'
                                        }
                                    `}
                                >

                                    {/* Avatar */}

                                    <div className="relative shrink-0">

                                        <div className="w-10 h-10 rounded-full bg-[#F7E7DE] text-[#A85F3B] flex items-center justify-center text-xs font-semibold">
                                            {conversation.initials}
                                        </div>

                                        {conversation.online && (
                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#4E8F63] border-2 border-white" />
                                        )}

                                    </div>


                                    {/* Conversation info */}

                                    <div className="min-w-0 flex-1">

                                        <div className="flex items-center justify-between gap-2">

                                            <p className="text-sm font-semibold text-[#2C2C2C] truncate">
                                                {conversation.name}
                                            </p>

                                            <span className="text-[10px] text-[#9A9A9A] shrink-0">
                                                {conversation.time}
                                            </span>

                                        </div>

                                        <p className="text-[11px] text-[#C67A52] truncate mt-0.5">
                                            {conversation.item}
                                        </p>

                                        <div className="flex items-center justify-between gap-2 mt-1">

                                            <p className="text-xs text-[#9A9A9A] truncate">
                                                {conversation.lastMessage}
                                            </p>

                                            {conversation.unread > 0 && (
                                                <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#C67A52] text-white text-[10px] flex items-center justify-center shrink-0">
                                                    {conversation.unread}
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </button>

                            ))

                        ) : (

                            <div className="px-5 py-12 text-center">

                                <Search className="w-6 h-6 text-[#9A9A9A] mx-auto" />

                                <p className="text-sm font-medium text-[#2C2C2C] mt-3">
                                    No conversations found
                                </p>

                                <p className="text-xs text-[#9A9A9A] mt-1">
                                    Try searching for another name or item.
                                </p>

                            </div>

                        )}

                    </div>

                </div>


                {/* Chat */}

                <div
                    className={`
                        flex-1 flex-col
                        min-w-0
                        ${showChat ? 'flex' : 'hidden md:flex'}
                    `}
                >

                    {/* Chat header */}

                    <div className="h-[72px] px-4 sm:px-5 border-b border-[#E5E2DC] flex items-center justify-between gap-3 shrink-0">

                        <div className="flex items-center gap-3 min-w-0">

                            {/* Mobile back */}

                            <button
                                onClick={() => setShowChat(false)}
                                className="md:hidden p-1.5 rounded-lg hover:bg-[#F5F2EC] cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5 text-[#2C2C2C]" />
                            </button>


                            <div className="w-9 h-9 rounded-full bg-[#F7E7DE] text-[#A85F3B] flex items-center justify-center text-xs font-semibold shrink-0">
                                {selectedConversation.initials}
                            </div>


                            <div className="min-w-0">

                                <div className="flex items-center gap-2">

                                    <p className="text-sm font-semibold text-[#2C2C2C] truncate">
                                        {selectedConversation.name}
                                    </p>

                                    {selectedConversation.online && (
                                        <span className="text-[10px] text-[#4E8F63] shrink-0">
                                            Online
                                        </span>
                                    )}

                                </div>

                                <p className="text-[11px] text-[#9A9A9A] truncate">
                                    {selectedConversation.item}
                                </p>

                            </div>

                        </div>


                        <button className="p-2 rounded-lg hover:bg-[#F5F2EC] text-[#9A9A9A] hover:text-[#2C2C2C] cursor-pointer transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>

                    </div>


                    {/* Item reference */}

                    <div className="mx-4 sm:mx-5 mt-4 px-3 py-3 bg-[#F5F2EC] border border-[#E5E2DC] rounded-lg flex items-center justify-between gap-3">

                        <div className="min-w-0">

                            <p className="text-[10px] uppercase tracking-wide text-[#9A9A9A]">
                                Discussing
                            </p>

                            <p className="text-xs font-medium text-[#2C2C2C] truncate mt-0.5">
                                {selectedConversation.item}
                            </p>

                        </div>

                        <button className="text-xs text-[#C67A52] shrink-0 cursor-pointer hover:text-[#A86540]">
                            View item
                        </button>

                    </div>


                    {/* Messages */}

                    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">

                        <div className="flex flex-col gap-3">

                            {currentMessages.map((msg) => (

                                <div
                                    key={msg.id}
                                    className={`
                                        flex
                                        ${msg.sender === 'me'
                                            ? 'justify-end'
                                            : 'justify-start'
                                        }
                                    `}
                                >

                                    <div
                                        className={`
                                            max-w-[80%] sm:max-w-[65%]
                                            ${
                                                msg.sender === 'me'
                                                    ? 'bg-[#C67A52] text-white rounded-2xl rounded-br-md'
                                                    : 'bg-[#F5F2EC] text-[#2C2C2C] rounded-2xl rounded-bl-md'
                                            }
                                            px-3.5 py-2.5
                                        `}
                                    >

                                        <p className="text-xs sm:text-sm leading-relaxed">
                                            {msg.text}
                                        </p>

                                        <div
                                            className={`
                                                flex items-center justify-end gap-1 mt-1
                                                ${
                                                    msg.sender === 'me'
                                                        ? 'text-white/70'
                                                        : 'text-[#9A9A9A]'
                                                }
                                            `}
                                        >

                                            <span className="text-[9px]">
                                                {msg.time}
                                            </span>

                                            {msg.sender === 'me' && (
                                                <CheckCheck className="w-3 h-3" />
                                            )}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Message input */}

                    <div className="border-t border-[#E5E2DC] p-3 sm:p-4">

                        <div className="flex items-center gap-2">

                            <button className="p-2.5 rounded-lg text-[#9A9A9A] hover:bg-[#F5F2EC] hover:text-[#2C2C2C] cursor-pointer transition-colors">
                                <Paperclip className="w-5 h-5" />
                            </button>


                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        sendMessage()
                                    }
                                }}
                                placeholder="Write a message..."
                                className="flex-1 h-10 px-3 bg-[#FAF8F4] border border-[#E5E2DC] rounded-lg text-sm text-[#2C2C2C] outline-none focus:border-[#C67A52] transition-colors"
                            />


                            <button
                                onClick={sendMessage}
                                disabled={!message.trim()}
                                className={`
                                    w-10 h-10 flex items-center justify-center rounded-lg
                                    transition-colors
                                    ${
                                        message.trim()
                                            ? 'bg-[#C67A52] hover:bg-[#A86540] text-white cursor-pointer'
                                            : 'bg-[#F5F2EC] text-[#B5B1AB] cursor-not-allowed'
                                    }
                                `}
                            >
                                <Send className="w-4 h-4" />
                            </button>

                        </div>

                        <p className="text-[10px] text-[#B0ACA6] mt-2 px-1">
                            Press Enter to send
                        </p>

                    </div>

                </div>

            </div>


            {/* Bottom info */}

            <div className="mt-3 px-4 sm:px-5 py-3 bg-[#F5F2EC] rounded-xl flex items-start gap-2">

                <MessageCircle className="w-4 h-4 text-[#9A9A9A] shrink-0 mt-0.5" />

                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Keep conversations on CampusMarket and arrange safe campus meetups when buying or selling.
                </p>

            </div>

        </div>
    )
}

export default Messages