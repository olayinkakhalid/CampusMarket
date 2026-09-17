import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import {
    Bell,
    Heart,
    MessageCircle,
    Tag,
    ShoppingBag,
    Check,
    CheckCheck
} from 'lucide-react'


const initialNotifications = [
    {
        id: 1,
        type: 'message',
        title: 'New message from Ava Carter',
        text: 'Is the calculus book still available?',
        time: '10 minutes ago',
        group: 'Today',
        unread: true
    },
    {
        id: 2,
        type: 'favorite',
        title: 'Someone saved your listing',
        text: 'Your IKEA desk lamp was added to someone’s favorites.',
        time: '1 hour ago',
        group: 'Today',
        unread: true
    },
    {
        id: 3,
        type: 'price',
        title: 'Price dropped',
        text: 'An item in your favorites is now available at a lower price.',
        time: '3 hours ago',
        group: 'Today',
        unread: true
    },
    {
        id: 4,
        type: 'listing',
        title: 'Your listing is live',
        text: 'Your Mini fridge listing has been published successfully.',
        time: 'Yesterday',
        group: 'Yesterday',
        unread: false
    },
    {
        id: 5,
        type: 'message',
        title: 'New message from Marcus Lee',
        text: 'Can we meet around West Hall?',
        time: 'Yesterday',
        group: 'Yesterday',
        unread: false
    },
    {
        id: 6,
        type: 'favorite',
        title: 'Your listing is getting attention',
        text: 'Your AirPods Pro listing has received several saves.',
        time: '2 days ago',
        group: 'Earlier',
        unread: false
    },
    {
        id: 7,
        type: 'listing',
        title: 'Listing reminder',
        text: 'Your listing has been active for 7 days.',
        time: '4 days ago',
        group: 'Earlier',
        unread: false
    }
]


const Notifications = () => {

    const [notifications, setNotifications] = useState(
        initialNotifications
    )

    const [filter, setFilter] = useState('all')


    const unreadCount = notifications.filter(
        notification => notification.unread
    ).length


    const filteredNotifications = notifications.filter(
        notification =>
            filter === 'all' || notification.unread
    )


    const markAsRead = (id) => {

        setNotifications(prev =>
            prev.map(notification =>
                notification.id === id
                    ? { ...notification, unread: false }
                    : notification
            )
        )
    }


    const markAllAsRead = () => {

        setNotifications(prev =>
            prev.map(notification => ({
                ...notification,
                unread: false
            }))
        )
    }


    const getIcon = (type) => {

        if (type === 'message') {
            return <MessageCircle className="w-5 h-5" />
        }

        if (type === 'favorite') {
            return <Heart className="w-5 h-5" />
        }

        if (type === 'price') {
            return <Tag className="w-5 h-5" />
        }

        if (type === 'listing') {
            return <ShoppingBag className="w-5 h-5" />
        }

        return <Bell className="w-5 h-5" />
    }


    const getIconStyle = (type) => {

        if (type === 'message') {
            return 'bg-[#F7E7DE] text-[#C67A52]'
        }

        if (type === 'favorite') {
            return 'bg-[#F5F2EC] text-[#A85F3B]'
        }

        if (type === 'price') {
            return 'bg-[#E6F3EB] text-[#4E8F63]'
        }

        if (type === 'listing') {
            return 'bg-[#F5F2EC] text-[#6B6B6B]'
        }

        return 'bg-[#F5F2EC] text-[#9A9A9A]'
    }


    const groupedNotifications = {
        Today: filteredNotifications.filter(
            notification => notification.group === 'Today'
        ),

        Yesterday: filteredNotifications.filter(
            notification => notification.group === 'Yesterday'
        ),

        Earlier: filteredNotifications.filter(
            notification => notification.group === 'Earlier'
        )
    }


    return (
        <div className="bg-[#FAF8F4] min-h-screen px-4 sm:px-6 lg:px-8 py-5 sm:py-7">

            <Breadcrumb />


            {/* Heading */}

            <div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

                <div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
                        Notifications
                    </h1>

                    <p className="text-xs text-[#6B6B6B] mt-2">
                        Stay updated on your CampusMarket activity.
                    </p>

                </div>


                {unreadCount > 0 && (

                    <button
                        onClick={markAllAsRead}
                        className="self-start sm:self-auto flex items-center gap-2 text-xs text-[#C67A52] hover:text-[#A86540] cursor-pointer transition-colors"
                    >

                        <CheckCheck className="w-4 h-4" />

                        Mark all as read

                    </button>

                )}

            </div>


            {/* Filters */}

            <div className="flex items-center gap-2 mt-5">

                <button
                    onClick={() => setFilter('all')}
                    className={`
                        px-3 py-1.5 rounded-2xl text-xs cursor-pointer transition-colors
                        ${
                            filter === 'all'
                                ? 'bg-[#F7E7DE] text-[#A85F3B]'
                                : 'bg-white border border-[#E5E2DC] text-[#6B6B6B] hover:bg-[#F5F2EC]'
                        }
                    `}
                >
                    All
                </button>


                <button
                    onClick={() => setFilter('unread')}
                    className={`
                        px-3 py-1.5 rounded-2xl text-xs cursor-pointer transition-colors
                        ${
                            filter === 'unread'
                                ? 'bg-[#F7E7DE] text-[#A85F3B]'
                                : 'bg-white border border-[#E5E2DC] text-[#6B6B6B] hover:bg-[#F5F2EC]'
                        }
                    `}
                >

                    Unread

                    {unreadCount > 0 && (
                        <span className="ml-1.5">
                            {unreadCount}
                        </span>
                    )}

                </button>

            </div>


            {/* Notifications */}

            <div className="mt-5 max-w-4xl">

                {filteredNotifications.length > 0 ? (

                    <div className="bg-white border border-[#E5E2DC] rounded-xl overflow-hidden">

                        {Object.entries(groupedNotifications).map(
                            ([group, items]) => {

                                if (items.length === 0) {
                                    return null
                                }

                                return (
                                    <div key={group}>

                                        {/* Group heading */}

                                        <div className="px-4 sm:px-5 py-3 bg-[#FAF8F4] border-b border-[#E5E2DC]">

                                            <p className="text-xs font-semibold text-[#2C2C2C]">
                                                {group}
                                            </p>

                                        </div>


                                        {/* Notification items */}

                                        {items.map(notification => (

                                            <button
                                                key={notification.id}
                                                onClick={() =>
                                                    markAsRead(notification.id)
                                                }
                                                className={`
                                                    w-full text-left
                                                    flex items-start gap-3
                                                    px-4 sm:px-5 py-4
                                                    border-b border-[#F0EDE8]
                                                    last:border-b-0
                                                    cursor-pointer
                                                    transition-colors
                                                    ${
                                                        notification.unread
                                                            ? 'bg-[#FFFDFC]'
                                                            : 'bg-white'
                                                    }
                                                    hover:bg-[#FAF8F4]
                                                `}
                                            >

                                                {/* Icon */}

                                                <div
                                                    className={`
                                                        w-10 h-10
                                                        rounded-xl
                                                        flex items-center justify-center
                                                        shrink-0
                                                        ${getIconStyle(notification.type)}
                                                    `}
                                                >

                                                    {getIcon(notification.type)}

                                                </div>


                                                {/* Content */}

                                                <div className="flex-1 min-w-0">

                                                    <div className="flex items-start justify-between gap-3">

                                                        <p
                                                            className={`
                                                                text-sm
                                                                truncate
                                                                ${
                                                                    notification.unread
                                                                        ? 'font-semibold text-[#2C2C2C]'
                                                                        : 'font-medium text-[#4A4A4A]'
                                                                }
                                                            `}
                                                        >
                                                            {notification.title}
                                                        </p>


                                                        <span className="text-[10px] text-[#9A9A9A] whitespace-nowrap shrink-0">
                                                            {notification.time}
                                                        </span>

                                                    </div>


                                                    <p className="text-xs text-[#9A9A9A] leading-relaxed mt-1">
                                                        {notification.text}
                                                    </p>

                                                </div>


                                                {/* Unread indicator */}

                                                {notification.unread && (

                                                    <span className="w-2 h-2 rounded-full bg-[#C67A52] shrink-0 mt-2" />

                                                )}

                                            </button>

                                        ))}

                                    </div>
                                )
                            }
                        )}

                    </div>

                ) : (

                    /* Empty state */

                    <div className="bg-white border border-[#E5E2DC] rounded-xl px-5 py-14 flex flex-col items-center justify-center text-center">

                        <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center">

                            {filter === 'unread' ? (
                                <Check className="w-6 h-6 text-[#9A9A9A]" />
                            ) : (
                                <Bell className="w-6 h-6 text-[#9A9A9A]" />
                            )}

                        </div>


                        <p className="text-sm font-semibold text-[#2C2C2C] mt-4">

                            {filter === 'unread'
                                ? 'You’re all caught up'
                                : 'No notifications yet'
                            }

                        </p>


                        <p className="text-xs text-[#9A9A9A] mt-1 max-w-xs">

                            {filter === 'unread'
                                ? 'There are no unread notifications right now.'
                                : 'Activity from your CampusMarket account will appear here.'
                            }

                        </p>

                    </div>

                )}

            </div>


            {/* Bottom info */}

            <div className="max-w-4xl mt-3 px-4 sm:px-5 py-3 bg-[#F5F2EC] rounded-xl flex items-start gap-2">

                <Bell className="w-4 h-4 text-[#9A9A9A] shrink-0 mt-0.5" />

                <p className="text-xs text-[#6B6B6B] leading-relaxed">

                    Notifications help you keep track of messages, listings, favorites, and activity.

                </p>

            </div>

        </div>
    )
}


export default Notifications