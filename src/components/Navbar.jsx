import React, { useState } from 'react'
import AuthRequiredCard from '../components/AuthRequiredCard.jsx'
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import fav from '../assets/heart.png'
import message from '../assets/message-circle.png'
import bell from '../assets/bell.png'
import { GraduationCap, Search, Menu, X } from 'lucide-react';

const Navbar = () => {



    const [menuOpen, setMenuOpen] = useState(false)
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [showAuthCard, setShowAuthCard] = useState(false)

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Browse", path: "/browse" },
        { name: "Categories", path: "/categories" },
        { name: "Sell items", path: "/sellitems" },
    ]

    const handleSearch = (value) => {
        if (value.trim()) {
            navigate(`/browse?search=${encodeURIComponent(value)}`);
        } else {
            navigate('/browse');
        }
    };

    return (
        <>
            {/* STICKY HEADER BLOCK */}
            <div className="bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">

                {/* NAVBAR */}
                <div className="flex justify-between items-center px-3 sm:px-4 lg:px-6 py-2">

                    {/* LEFT */}
                    <div className="flex items-center gap-3 sm:gap-6">

                        <NavLink
                            to="/"
                            className="flex items-center gap-2 cursor-pointer shrink-0"
                        >
                            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />

                            <p className="text-sm sm:text-base">
                                CampusMarket
                            </p>
                        </NavLink>


                        {/* DESKTOP NAV */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-6">

                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `transition-colors duration-200 cursor-pointer ${isActive
                                                ? "text-[#C67A52]"
                                                : "text-[#2C2C2C] hover:text-[#C67A52]"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}

                            </ul>
                        </div>

                    </div>


                    {/* RIGHT */}
                    <div className="flex items-center gap-1.5 sm:gap-3">

                        {/* DESKTOP SEARCH */}
                        <div className="hidden sm:flex bg-[#F5F2EC] items-center gap-2 rounded-md px-3 py-[9px]">

                            <Search className="text-[#9A9A9A] w-5 h-5 shrink-0" />

                            <input
                                className="bg-[#F5F2EC] placeholder:text-[#9A9A9A] focus:outline-none w-24 md:w-32 lg:w-40"
                                type="text"
                                placeholder="Search listings"
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                            />

                        </div>


                        {/* MOBILE SEARCH BUTTON */}
                        <button
                            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                            className="sm:hidden flex items-center justify-center p-2 rounded-md hover:bg-[#F5F2EC] transition-colors duration-200 cursor-pointer"
                        >
                            {mobileSearchOpen ? (
                                <X className="w-5 h-5 text-[#2C2C2C]" />
                            ) : (
                                <Search className="w-5 h-5 text-[#2C2C2C]" />
                            )}
                        </button>


                        {/* FAVORITE */}
                        <NavLink
                            to="/favorites"
                            onClick={() => setShowAuthCard(true)}
                            className="hidden md:flex bg-[#F5F2EC] items-center rounded-md px-3 lg:px-4 py-3 cursor-pointer hover:bg-gray-200 transition-all duration-200"
                        >

                            <img
                                className="w-5 h-5"
                                src={fav}
                                alt="Favorite"
                            />

                        </NavLink>


                        {/* MESSAGE */}
                        <NavLink
                            to="/messages"
                            onClick={() => setShowAuthCard(true)}
                            className="hidden md:flex bg-[#F5F2EC] items-center rounded-md px-3 lg:px-4 py-3 cursor-pointer hover:bg-gray-200 transition-all duration-200"
                        >
                            <img
                                className="w-5 h-5"
                                src={message}
                                alt="Messages"
                            />
                        </NavLink>


                        {/* NOTIFICATION */}
                        <NavLink
                            to="/notifications"
                            onClick={() => setShowAuthCard(true)}
                            className="hidden sm:flex bg-[#F5F2EC] items-center rounded-md px-3 lg:px-4 py-3 cursor-pointer hover:bg-gray-200 transition-all duration-200"
                        >
                            <img
                                className="w-5 h-5"
                                src={bell}
                                alt="Notifications"
                            />
                        </NavLink>


                        {/* DESKTOP AUTH */}
                        <div className="hidden sm:flex items-center gap-1 sm:gap-2">

                            <button className="bg-[#C67A52] text-white font-medium text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-md hover:bg-[#A86540] transition-colors duration-200 cursor-pointer">
                                Sign In
                            </button>

                            <button className="text-[#C67A52] font-medium text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-md hover:bg-[#F5F2EC] transition-colors duration-200 cursor-pointer">
                                Sign Up
                            </button>

                        </div>


                        {/* HAMBURGER */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden relative z-50 flex items-center justify-center p-2 rounded-md hover:bg-[#F5F2EC] transition-colors duration-200 cursor-pointer"
                        >
                            {menuOpen ? (
                                <X className="w-6 h-6 text-[#2C2C2C]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#2C2C2C]" />
                            )}
                        </button>

                    </div>

                </div>


                {/* MOBILE SEARCH FIELD */}
                <div
                    className={`sm:hidden overflow-hidden transition-all duration-300 ${mobileSearchOpen
                        ? "max-h-20 opacity-100 px-3 pb-3"
                        : "max-h-0 opacity-0 px-3"
                        }`}
                >
                    <div className="bg-[#F5F2EC] flex items-center gap-2 rounded-md px-3 py-3">

                        <Search className="text-[#9A9A9A] w-5 h-5 shrink-0" />

                        <input
                            autoFocus={mobileSearchOpen}
                            className="bg-[#F5F2EC] placeholder:text-[#9A9A9A] focus:outline-none w-full"
                            type="text"
                            placeholder="Search listings"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                        />

                    </div>
                </div>

            </div>


            {/* MOBILE MENU */}
            <div
                className={`lg:hidden fixed inset-0 h-screen w-screen z-40 bg-white/80 backdrop-blur-xl border-t border-[#E5E2DC] shadow-[0_20px_40px_rgba(44,44,44,0.08)] transition-all duration-300 ease-out ${menuOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-4 invisible"
                    }`}
            >
                <div className="flex flex-col gap-2 px-4 pt-[80px] pb-6">

                    {/* NAV LINKS */}
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `relative flex items-center px-5 py-4 rounded-xl text-base transition-all duration-200 overflow-hidden ${isActive
                                    ? "bg-[#C67A52]/10 text-[#C67A52] font-medium shadow-sm"
                                    : "text-[#2C2C2C] hover:bg-[#F5F2EC]/60 hover:shadow-sm"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#C67A52] rounded-r-full" />
                                    )}

                                    <span>{link.name}</span>

                                    {isActive && (
                                        <span className="ml-auto text-[#C67A52] text-lg">
                                            →
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}


                    {/* MOBILE FEATURES */}
                    <div className="grid grid-cols-3 gap-2 mt-3">

                        {/* FAVORITES */}
                        <NavLink
                            to="/favorites"
                            onClick={() => {
                                setShowAuthCard(true)
                                setMenuOpen(false)
                            }}
                            className="flex flex-col items-center justify-center gap-2 bg-[#F5F2EC] rounded-xl py-4 cursor-pointer hover:bg-[#EEEAE2] transition-colors"
                        >
                            <img
                                className="w-5 h-5"
                                src={fav}
                                alt="Favorites"
                            />

                            <span className="text-xs text-[#2C2C2C]">
                                Favorites
                            </span>
                        </NavLink>


                        {/* MESSAGES */}
                        <NavLink
                            to="/messages"
                            onClick={() => {
                                setShowAuthCard(true)
                                setMenuOpen(false)
                            }}
                            className="flex flex-col items-center justify-center gap-2 bg-[#F5F2EC] rounded-xl py-4 cursor-pointer hover:bg-[#EEEAE2] transition-colors"
                        >
                            <img
                                className="w-5 h-5"
                                src={message}
                                alt="Messages"
                            />

                            <span className="text-xs text-[#2C2C2C]">
                                Messages
                            </span>
                        </NavLink>


                        {/* NOTIFICATIONS */}
                        <NavLink
                            to="/notifications"
                            onClick={() => {
                                setShowAuthCard(true)
                                setMenuOpen(false)
                            }}
                            className="flex flex-col items-center justify-center gap-2 bg-[#F5F2EC] rounded-xl py-4 cursor-pointer hover:bg-[#EEEAE2] transition-colors"
                        >
                            <img
                                className="w-5 h-5"
                                src={bell}
                                alt="Notifications"
                            />

                            <span className="text-xs text-[#2C2C2C]">
                                Notifications
                            </span>
                        </NavLink>

                    </div>


                    {/* MOBILE AUTH */}
                    <div className="mt-4 px-1 flex flex-col gap-3">

                        <button className="bg-[#C67A52] text-white font-medium py-3 rounded-xl hover:bg-[#A86540] transition-colors duration-200 cursor-pointer">
                            Sign In
                        </button>

                        <button className="text-[#C67A52] font-medium py-2 cursor-pointer">
                            Create an account
                        </button>

                    </div>

                </div>
            </div>


            {/* AUTH CARD */}
            {/* {showAuthCard && (
                <AuthRequiredCard
                    onClose={() => {
                        setShowAuthCard(false)
                        navigate('/')
                    }}
                />
            )} */}

        </>
    )
}

export default Navbar
