import React from 'react'
import { Link } from "react-router-dom";
import check from '../assets/badge-check.png'
import search from '../assets/search.png'
import arrowDown from '../assets/chevron-down.png'
import homeImage from '../assets/HeroImage.jpg'
import iconWrap from '../assets/IconWrap.png'
import arrowRight from '../assets/arrow-right.png'
import calculus from '../assets/calculus.jpg'
import bicycle from '../assets/bicycle.jpg'
import airpord from '../assets/airpord.jpg'
import lampwithdesk from '../assets/lampwithdesk.jpg'
import { MapPin } from "lucide-react";
import MiniFridge from '../assets/MiniFridge.jpg'
import NoiseCanceling from '../assets/NoiseCanceling.jpg'
import StudioSpeaker from '../assets/StudioSpeaker.jpg'
import OrganicChemistry from '../assets/OrganicChemistry.jpg'
import GrahpicalCal from '../assets/GrahpicalCal.jpg'
import Coat from '../assets/Coat.jpg'
import DeskSetup from '../assets/DeskSetup.jpg'
import GrayBedcover from '../assets/GrayBedcover.jpg'
import { ShieldCheck } from 'lucide-react';
import Chair from '../assets/Chair.jpg'
import SteamedDish from '../assets/SteamedDish.jpg'
import CampusView from '../assets/CampusView.jpg'
import Skateboard from '../assets/Skateboard.jpg'
import DrawerStorage from '../assets/DrawerStorage.jpg'
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Camera } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Handshake } from 'lucide-react';
import Section6Image from '../assets/Section6Image.png'
import AOS from 'aos'
import { Search } from 'lucide-react';
import 'aos/dist/aos.css'

import {
    BookOpen,
    Armchair,
    Laptop,
    Shirt,
    Bike,
    Smartphone,
    CookingPot,
    MoreHorizontal,
} from "lucide-react";


const categories = [
    { id: 1, icon: BookOpen, title: "Textbooks", count: 320 },
    { id: 2, icon: Armchair, title: "Furniture", count: 180 },
    { id: 3, icon: Laptop, title: "Electronics", count: 245 },
    { id: 4, icon: Shirt, title: "Clothing", count: 156 },
    { id: 5, icon: Bike, title: "Bikes", count: 89 },
    { id: 6, icon: Smartphone, title: "Phones", count: 124 },
    { id: 7, icon: CookingPot, title: "Appliances", count: 76 },
    { id: 8, icon: MoreHorizontal, title: "Others", count: 50 },
];


const featuredMateria = [
    { id: 3, Image: lampwithdesk, title: 'IKEA desk lamp with warm LED bulb', cost: '$16', tag: 'like now', location: 'Priya S. · Riverside Apts · 0.8 mi' },
    { id: 2, Image: calculus, title: 'Calculus: Early Transcendentals, 8th edition', cost: '$38', tag: 'Like now', location: 'Ava C. · North Dorms · 0.3 mi' },
    { id: 1, Image: airpord, title: 'AirPods Pro (2nd gen) with charging case', cost: '$139', tag: 'Used · Good', location: 'Marcus L. · West Hall · 0.5 mi' },
    { id: 4, Image: bicycle, title: 'Trek hybrid bike, tuned for campus riding', cost: '$185', tag: 'Used · Good', location: 'Jonah R. · South Quad · 1.1 mi' }
];


const RecentlyAdded = [
    { id: 9, Image: MiniFridge, title: 'Mini fridge, 3.2 cu ft with freezer', cost: '$65', min: '4h ago', tag: 'New' },
    { id: 10, Image: NoiseCanceling, title: 'Noise-cancelling over-ear headphones', cost: '$95', min: '6h ago', tag: 'New' },
    { id: 11, Image: StudioSpeaker, title: 'Studio monitor speakers, pair', cost: '$140', min: '2d ago', tag: '2d' },
    { id: 5, Image: OrganicChemistry, title: 'Organic chemistry model kit, 240 pieces', cost: '$22', min: '2h ago', tag: 'New' },
    { id: 12, Image: GrahpicalCal, title: 'TI-84 Plus graphing calculator', cost: '$40', min: '1d ago', tag: '1d' },
    { id: 13, Image: Coat, title: 'Winter parka, size M, navy', cost: '$35', min: '12h ago', tag: 'New' },
    { id: 14, Image: DeskSetup, title: 'Standing desk converter, dual monitor', cost: '$48', min: '9h ago', tag: 'New' },
    { id: 15, Image: GrayBedcover, title: 'Twin XL bedding set, grey', cost: '$25', min: '1d ago', tag: '1d' }
];


const NearbyListing = [
    { id: 1, Image: Chair, title: 'IKEA desk chair, adjustable height', address: 'West Hall · 0.2 mi · posted 3h ago', cost: '$28', time: '4 min walk' },
    { id: 16, Image: Skateboard, title: 'Skateboard, barely used', address: 'North Dorms · 0.3 mi · posted 5h ago', cost: '$45', time: '5 min walk' },
    { id: 17, Image: SteamedDish, title: 'Rice cooker with steamer basket', address: 'Riverside Apts · 0.6 mi · posted yesterday', cost: '$18', time: '9 min walk' },
    { id: 18, Image: DrawerStorage, title: 'Desk organizer set with drawer', address: 'South Quad · 0.9 mi · posted 2d ago', cost: '$12', time: '12 min walk' }
];


const GridListing = [
    { id: 1, Icon: Camera, title: 'List it in 3 minutes', description: 'Add photos, a title and your price. We suggest the category for you.', tag: '1' },
    { id: 2, Icon: MapPin, title: 'Get matched nearby', description: 'Your listing reaches your residence hall first, then the whole campus.', tag: '2' },
    { id: 3, Icon: MessageSquare, title: 'Chat and agree', description: 'Message in the app, check the verified campus badge, and settle on a price.', tag: '3' },
    { id: 4, Icon: Handshake, title: 'Meet and get paid', description: 'Hand it over at a campus hub and receive payment the same day.', tag: '4' },
];


const home = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>

            {/* HERO SECCTION */}

            <div className='px-4 sm:px-6 lg:px-8 py-7 flex flex-col lg:flex-row justify-between gap-8 bg-[#F5F2EC]'>

                <div className='w-full lg:w-auto'>

                    <div className="flex items-center gap-2 bg-[#E6F3EB] px-2 py-1 rounded-md w-fit">
                        <img src={check} alt="" />

                        <p className="text-[#4E8F62] text-sm font-medium">
                            Verified campus community
                        </p>
                    </div>


                    <div>
                        <p className="text-3xl sm:text-4xl text-[#2C2C2C] font-bold mt-4">
                            Buy and sell on campus, in minutes.
                        </p>
                    </div>


                    <div>
                        <p className="text-[#6B6B6B] text-sm mt-4">
                            Find textbooks, dorm gear and electronics from verified students a few steps away — or <br className="hidden sm:block" />
                            clear out your room and get paid the same day.
                        </p>
                    </div>


                    {/* HERO SEARCH */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-[#FFFFFF] p-3 rounded-xl mt-6 w-full max-w-[600px]">

                        {/* Search input */}
                        <div className="flex items-center gap-2 flex-1 min-w-0 w-full">

                            <Search className='text-[#9A9A9A] cursor-pointer w-5 h-5 shrink-0' />

                            <input
                                className="focus:outline-none flex-1 min-w-0 w-full text-sm"
                                type="text"
                                placeholder="Search textbooks, furniture, tech…"
                            />

                        </div>


                        {/* Category */}
                        <div className="flex justify-between items-center gap-2 border-t sm:border-t-0 sm:border-l border-gray-300 pt-3 sm:pt-0 sm:pl-3 cursor-pointer w-full sm:w-auto">

                            <p className="text-[#6B6B6B] text-sm font-medium whitespace-nowrap">
                                All Categories
                            </p>

                            <img
                                className="w-5 h-5 shrink-0"
                                src={arrowDown}
                                alt="Arrow Down"
                            />

                        </div>


                        {/* Search button */}
                        <button className="bg-[#C67A52] text-white font-medium text-sm py-2.5 px-5 rounded-md hover:bg-[#A86540] transition-colors duration-200 cursor-pointer w-full sm:w-auto whitespace-nowrap">
                            Search
                        </button>

                    </div>


                    <div className='flex flex-wrap items-center gap-3 mt-6'>

                        <div className='bg-[#FFFFFF] rounded-xl px-2 py-1 items-center justify-center flex cursor-pointer'>
                            <p>Calculus textbook</p>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-xl px-2 py-1 items-center justify-center flex cursor-pointer'>
                            <p>Mini fridge</p>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-xl px-2 py-1 items-center justify-center flex cursor-pointer'>
                            <p>Desk lamp</p>
                        </div>

                        <div className='bg-[#FFFFFF] rounded-xl px-2 py-1 items-center justify-center flex cursor-pointer'>
                            <p>Campus bike</p>
                        </div>

                    </div>


                    <div className='flex flex-wrap gap-8 mt-6'>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl text-[#2C2C2C]'>1,240</p>
                            <p className='text-[#9A9A9A]'>live listings</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl text-[#2C2C2C]'>320</p>
                            <p className='text-[#9A9A9A]'>sold this week</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl text-[#2C2C2C]'>12 min</p>
                            <p className='text-[#9A9A9A]'>avg reply time</p>
                        </div>

                    </div>

                </div>


                <div className='flex flex-col gap-6 w-full lg:w-auto'>

                    <div className='relative'>

                        <img
                            className='w-full lg:w-[500px] h-[250px] sm:h-[300px] object-cover rounded-[10px]'
                            src={homeImage}
                            alt=""
                        />

                        <div className='absolute bottom-3 left-3 bg-white/95 px-3 py-2 rounded-full shadow-sm cursor-pointer'>

                            <p className='flex items-center gap-1.5 text-xs font-medium text-[#4E8F63]'>
                                <ShieldCheck className='w-4 h-4' />
                                Campus-verified sellers
                            </p>

                        </div>

                    </div>


                    <div className='flex gap-4 sm:gap-6 bg-[#FFFFFF] rounded-[10px] px-4 py-3'>

                        <img className="hidden sm:block" src={iconWrap} alt="" />

                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-base sm:text-lg text-[#2C2C2C]'>
                                2,410 items added this week
                            </p>

                            <p className='text-[#6B6B6B]'>
                                Most listed under $40, from dorms near you
                            </p>
                        </div>

                    </div>

                </div>

            </div>


            {/* SECTION 2 */}

            <div className='pt-10 bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7 pb-15'>

                <div>
                    <p className='font-bold text-xl text-[#2C2C2C]'>
                        Popular categories
                    </p>
                </div>

                <Link to='/categories' className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-5'>

                    <p className='text-[#6B6B6B] text-sm'>
                        24 categories · 1,240 items listed across campus
                    </p>

                    <p className='text-[#C67A52] flex gap-1 items-center cursor-pointer'>
                        View all categories
                        <img className='w-3 h-3' src={arrowRight} alt="" />
                    </p>

                </Link>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

                    {categories.map((category) => {

                        const Icon = category.icon;

                        return (
                            <div
                                key={category.id}
                                className="bg-white rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                            >

                                <div className="w-12 h-12 rounded-xl bg-[#EAF0F5] flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-[#4C718F]" />
                                </div>

                                <p className="mt-3 font-bold text-[#2C2C2C]">
                                    {category.title}
                                </p>

                                <p className="text-sm text-[#9A9A9A] mt-1">
                                    {category.count} items
                                </p>

                            </div>
                        );

                    })}

                </div>

            </div>


            {/* SECTION 3 */}

            <div className='bg-[#FFFFFF] px-4 sm:px-6 lg:px-8 py-7 pt-10 pb-10'>

                <div className='font-bold text-xl text-[#2C2C2C]'>
                    <p>
                        Featured listings
                    </p>
                </div>

                <Link to='/browse' className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-5'>

                    <p className='text-[#6B6B6B] text-sm'>
                        Hand-picked from verified sellers a few minutes from you
                    </p>

                    <p className='text-[#C67A52] flex gap-1 items-center cursor-pointer'>
                        Browse all listings
                        <img className='w-3 h-3' src={arrowRight} alt="" />
                    </p>

                </Link>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

                    {featuredMateria.map((item) => {

                        return (
                            <Link
                                to={`/product/${item.id}`}
                                key={item.id}
                                className='rounded-xl border border-[#E5E5E5] cursor-pointer hover:bg-gray-100 transition-all duration-300'
                            >

                                <div>
                                    <img
                                        className='rounded-t-xl w-full h-60 object-cover'
                                        src={item.Image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className='px-4 py-3'>

                                    <p className='font-bold text-sm leading-5 truncate'>
                                        {item.title}
                                    </p>

                                    <div className='flex justify-between items-center mt-2'>

                                        <p className='text-[#2C2C2C] font-bold text-md'>
                                            {item.cost}
                                        </p>

                                        <p className='bg-[#F5F2EC] px-2 py-1 text-xs rounded-lg'>
                                            {item.tag}
                                        </p>

                                    </div>

                                    <div className='flex items-center gap-1 mt-2'>

                                        <MapPin className="w-4 h-4 text-[#9A9A9A] shrink-0" />

                                        <p className='text-[#9A9A9A] text-sm'>
                                            {item.location}
                                        </p>

                                    </div>

                                </div>

                            </Link>
                        );

                    })}

                </div>

            </div>


            {/* SECTION 4 */}

            <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7 pt-10'>

                <div className='font-bold text-xl text-[#2C2C2C]'>
                    <p>
                        Recently added
                    </p>
                </div>

                <Link to='/browse' className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-5'>

                    <p className='text-[#6B6B6B] text-sm'>
                        Fresh listings posted in the last 48 hours
                    </p>

                    <p className='text-[#C67A52] flex gap-1 items-center cursor-pointer'>
                        See everything new
                        <img className='w-3 h-3' src={arrowRight} alt="" />
                    </p>

                </Link>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

                    {RecentlyAdded.map((add) => {

                        return (
                            <Link
                                to={`/product/${add.id}`}
                                key={add.id}
                                className='bg-[#FFFFFF] pb-3 rounded-xl border border-[#E5E5E5] cursor-pointer hover:bg-[#FAF8F4] transition-all duration-300'
                            >

                                <div className='relative'>

                                    <img
                                        className='rounded-t-xl w-full h-60 object-cover'
                                        src={add.Image}
                                        alt={add.title}
                                    />

                                    <div className="absolute top-3 left-3 bg-[#F7E3E0] px-2 py-1 text-xs rounded-lg">

                                        <p className='text-[#C4574C]'>
                                            {add.tag}
                                        </p>

                                    </div>

                                </div>

                                <div className='px-4 py-3'>

                                    <p className='font-bold text-sm leading-5 truncate'>
                                        {add.title}
                                    </p>

                                    <div className='flex justify-between items-center mt-2 pb-0'>

                                        <p className='text-[#2C2C2C] font-bold text-md'>
                                            {add.cost}
                                        </p>

                                        <p className='text-xs text-[#9A9A9A]'>
                                            {add.min}
                                        </p>

                                    </div>

                                </div>

                            </Link>
                        );

                    })}

                </div>

            </div>


            {/* SECTION 5 */}

            <div className='bg-[#FFFFFF] px-4 sm:px-6 lg:px-8 py-7 pt-10'>

                <div className='font-bold text-xl text-[#2C2C2C]'>
                    <p>
                        Nearby listings
                    </p>
                </div>

                <Link to='/browse' className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-5'>

                    <p className='text-[#6B6B6B] text-sm'>
                        Items within a 10-minute walk of your campus
                    </p>

                    <p className='text-[#C67A52] flex gap-1 items-center cursor-pointer'>
                        Open campus map view
                        <img className='w-3 h-3' src={arrowRight} alt="" />
                    </p>

                </Link>


                <div className="flex flex-col lg:flex-row gap-6 items-stretch mt-5">

                    <div className="flex-1 space-y-3">

                        {NearbyListing.map((nearby) => {

                            return (
                                <Link
                                    to={`/product/${add.id}`}
                                    className="border border-[#E5E2DC] bg-[#F5F2EC] rounded-xl p-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >

                                    <div className="flex gap-3 sm:gap-4 items-center">

                                        <img
                                            className="object-cover w-20 h-20 sm:w-24 sm:h-24 rounded-lg shrink-0"
                                            src={nearby.Image}
                                            alt={nearby.title}
                                        />

                                        <div className="flex-1 min-w-0">

                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">

                                                <p className="text-sm sm:text-md font-semibold text-[#2C2C2C] truncate">
                                                    {nearby.title}
                                                </p>

                                                <p className="text-sm sm:text-md font-bold text-[#2C2C2C]">
                                                    {nearby.cost}
                                                </p>

                                            </div>


                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2">

                                                <p className="text-xs text-[#9A9A9A]">
                                                    {nearby.address}
                                                </p>

                                                <p className="text-xs border border-none bg-[#E4F0E7] px-1 py-1 rounded-md text-[#4E8F63] w-fit">
                                                    {nearby.time}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </Link>
                            );

                        })}

                    </div>


                    <div className="w-full lg:w-[500px] lg:shrink-0">

                        <img
                            className="w-full h-[280px] lg:h-full object-cover rounded-[10px]"
                            src={CampusView}
                            alt="Campus"
                        />

                    </div>

                </div>

            </div>


            {/* SECTION 6 */}

            <div className='bg-[#F7E7DE] px-4 sm:px-6 lg:px-8 py-7 pt-10'>

                <div className='flex flex-col lg:flex-row justify-between gap-8 items-start'>

                    <div className='flex flex-col w-full lg:w-auto'>

                        <div>
                            <p className='text-[#A85F3B] text-xs'>
                                SELL IN THREE MINUTES
                            </p>
                        </div>

                        <div>
                            <p className='text-[#2C2C2C] font-bold text-2xl mt-5'>
                                Turn the stuff you don't use into cash.
                            </p>
                        </div>

                        <div>
                            <p className='text-[#6B6B6B] text-sm mt-3 max-w-[600px]'>
                                Snap a few photos, set your price and post it to everyone on campus. Most items sell within 48 hours — no shipping, no seller fee for students.
                            </p>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-center">

                            <button
                                className="bg-[#C67A52] text-white px-8 sm:px-10 py-3 rounded-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer"
                            >
                                + Sell an item
                            </button>

                            <button
                                className="bg-white text-[#2C2C2C] px-8 sm:px-10 py-3 rounded-lg border border-[#D0CCC4] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                            >
                                See selling tips
                            </button>

                        </div>

                        <div className='mt-4'>

                            <p className='text-[#A85F3B] text-sm'>
                                Free to list · 0% campus seller fee · Payout within 24 hours
                            </p>

                        </div>

                    </div>


                    <div className='relative w-full lg:w-auto'>

                        <img
                            className='w-full lg:w-[600px] object-cover rounded-xl h-[280px] lg:h-full'
                            src={Section6Image}
                            alt=""
                        />

                        <div className='bg-[#FFFFFF] rounded-lg absolute bottom-5 left-5 px-3 py-2 cursor-pointer'>

                            <p className='text-[#2C2C2C] font-bold'>
                                Your listing went live
                            </p>

                            <p className='text-[#6B6B6B] text-sm'>
                                12 students saved it in the first hour
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* SECTION 7 */}

            <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7 pt-10 pb-20'>

                <div className='flex flex-col gap-5 items-center text-center'>

                    <p className='text-[#2C2C2C] text-3xl sm:text-4xl font-bold'>
                        How CampusMarket works
                    </p>

                    <p className='text-[#6B6B6B] text-md'>
                        Four steps from clutter to cash, built around campus life
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

                    {GridListing.map((item) => {

                        const Icon = item.Icon;

                        return (
                            <div
                                key={item.id}
                                className='bg-[#FFFFFF] px-5 py-5 border border-[#E5E2DC] rounded-2xl'
                            >

                                <div className="flex justify-between items-center">

                                    <div className='w-12 h-12 bg-[#F7E7DE] text-[#A85F3B] rounded-full p-3 flex items-center justify-center'>
                                        <p>{item.tag}</p>
                                    </div>

                                    <div className='text-[#9A9A9A]'>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                </div>


                                <div className="flex flex-col gap-3">

                                    <div>
                                        <p className='text-[#2C2C2C] font-bold mt-3'>
                                            {item.title}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='text-[#6B6B6B] text-sm'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>


            {showScrollTop && (

                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    className="cursor-pointer group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/40 bg-white/30 backdrop-blur-xl shadow-lg shadow-black/10 px-3 py-3 text-[#2C2C2C] transition-all duration-300 hover:px-5 hover:bg-white/50 hover:-translate-y-1"
                >

                    <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[80px] group-hover:opacity-100">
                        Back to top
                    </span>

                </button>

            )}

        </div>
    )
}

export default home