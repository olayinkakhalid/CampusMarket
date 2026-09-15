import React, { useState, useEffect } from "react";
import Breadcrumb from '../components/Breadcrumb.jsx'
import { Search } from 'lucide-react';
import OrganicChemistry from '../assets/OrganicChemistry.jpg'
import calculus from '../assets/calculus.jpg'
import Microeconomic from '../assets/Microeconomic.jpg'
import Statistics from '../assets/Statistics.jpg'

import {
  BookOpen,
  Armchair,
  Laptop,
  Shirt,
  Bike,
  Dumbbell,
  Ticket,
  Lamp,
  MapPin,
  ArrowUp
} from "lucide-react";

const featuredMateria = [
  { id: 5, Image: OrganicChemistry, title: 'Organic Chemistry, 9th edition', cost: '$32', tag: 'Best value', min: '5h ago' },
  { id: 2, Image: calculus, title: 'Calculus: Early Transcendentals, 8th ed.', cost: '$38', tag: 'Best Value', min: '2h ago' },
  { id: 18, Image: Microeconomic, title: 'Microeconomics, 3rd edition', cost: '$24', tag: 'Best value', min: '1d ago' },
  { id: 6, Image: Statistics, title: 'Statistics for Engineers, 4th ed.', cost: '$27', tag: 'New', min: '8h ago' }
];

const Allcategories = [
  { id: 1, icon: BookOpen, title: "Textbooks", descrip: 'Course books, novels and study guides', count: '412 items', bg: "bg-[#D6E7F5]" },
  { id: 2, icon: Armchair, title: "Furniture", descrip: 'Desks, chairs and shelving', count: '154 items', bg: "bg-[#F2D8C8]" },
  { id: 3, icon: Laptop, title: "Electronics", descrip: 'Laptops, audio and accessories', count: '268 items', bg: "bg-[#D5EAD9]" },
  { id: 4, icon: Shirt, title: "Clothing", descrip: 'Coats, jerseys and sneakers', count: '143 items', bg: "bg-[#E9D4E3]" },
  { id: 5, icon: Bike, title: "Bikes & Scooters", descrip: 'Commuter bikes, boards and locks', count: '96 items', bg: "bg-[#E9E0C4]" },
  { id: 6, icon: Dumbbell, title: "Sports & Outdoors", descrip: 'Gym, hiking and camping gear', count: '78 items', bg: "bg-[#D8E2F4]" },
  { id: 7, icon: Lamp, title: "Dorm Essentials", descrip: 'Fridges, lamps and storage', count: '187 items', bg: "bg-[#DCDCDC]" },
  { id: 8, icon: Ticket, title: "Tickets & Events", descrip: 'Concerts, games and club events', count: '62 items', bg: "bg-[#F0D4C5]" }
];


const categories = () => {

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

      {/* HEAD SECTION */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7'>

        <Breadcrumb />

        <div>

          <p className='text-3xl sm:text-4xl text-[#2C2C2C] font-bold mt-3'>
            Browse by category
          </p>

          <p className='text-[#6B6B6B] text-sm pt-3'>
            24 categories · 1,240 live listings from verified students
          </p>

        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full border border-[#E5E2DC] rounded-xl px-2 py-2 bg-white mt-5">

          <div className="flex-1 flex items-center gap-2 px-3 min-w-0">

            <Search className="text-[#9A9A9A] w-5 h-5 shrink-0" />

            <input
              className="w-full outline-none text-sm text-[#2C2C2C] min-w-0"
              placeholder="Search categories, for example textbooks, mini fridge or bike"
              type="text"
            />

          </div>

          <div className="border-l-0 sm:border-l border-l-[#E5E2DC] pl-0 sm:pl-3 mt-2 sm:mt-0">

            <button
              className="w-full sm:w-auto px-8 py-2.5 bg-[#C67A52] cursor-pointer text-white rounded-lg hover:bg-[#B86D46] transition-colors duration-200"
            >
              Search
            </button>

          </div>

        </div>

      </div>

      {/* SECTION 2 */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-3'>

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>

          <p className='text-[#2C2C2C] font-bold text-2xl'>
            All categories
          </p>

          <p className='text-[#9A9A9A] text-sm'>
            8 of 24 shown · sorted by listings
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">

          {Allcategories.map((category) => {

            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="bg-white rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-all duration-300"
              >

                <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-[#4C718F]" />
                </div>

                <div>

                  <p className="mt-3 font-bold text-[#2C2C2C]">
                    {category.title}
                  </p>

                  <p className="mt-3 text-sm text-[#6B6B6B]">
                    {category.descrip}
                  </p>

                  <p className="text-sm text-[#9A9A9A] mt-1">
                    {category.count} items
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* SECTION 3 */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-3'>

        <p className='text-[#6B6B6B]'>
          Jump to a popular subcategory
        </p>

        <div className='flex flex-wrap gap-3 mt-3'>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Calculus
          </div>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Organic chemistry
          </div>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Mini fridges
          </div>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Desks & chairs
          </div>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Sneakers
          </div>

          <div className='bg-[#FFFFFF] text-[#6B6B6B] rounded-3xl border border-[#E5E2DC] px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200'>
            Concert tickets
          </div>

        </div>

      </div>

      {/* SECTION 4 */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-3 pb-10 pt-5'>

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>

          <p className='text-2xl font-bold text-[#2C2C2C]'>
            Popular in Textbooks
          </p>

          <p className='text-[#C67A52] text-sm cursor-pointer'>
            See all 412 textbooks
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

          {featuredMateria.map((item) => {

            return (
              <div
                key={item.id}
                className='bg-[#FFFFFF] rounded-xl border border-[#E5E2DC] cursor-pointer hover:bg-gray-100 transition-all duration-300'
              >

                <div className="relative">

                  <img
                    className="rounded-t-xl w-full h-56 sm:h-50 object-cover"
                    src={item.Image}
                    alt={item.title}
                  />

                  <p
                    className={`absolute top-3 left-3 px-2 py-1 text-xs rounded-lg ${item.tag === "New"
                      ? "bg-[#F7E3E0] text-[#C4574C]"
                      : "bg-[#E4F0E7] text-[#4E8F63]"
                      }`}
                  >
                    {item.tag}
                  </p>

                </div>

                <div className='px-4 py-3'>

                  <p className='text-sm leading-5 truncate'>
                    {item.title}
                  </p>

                  <div className='flex justify-between items-center mt-2'>

                    <p className='text-[#2C2C2C] font-bold text-md'>
                      {item.cost}
                    </p>

                    <p className='text-xs text-[#9A9A9A]'>
                      {item.min}
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

export default categories