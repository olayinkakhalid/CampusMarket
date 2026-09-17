import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import { Bookmark, X } from "lucide-react";
import arrowRight from '../assets/arrow-right.png'
import { Link } from 'react-router-dom'


const favorites = () => {

    const [favoriteProducts, setFavoriteProducts] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || []
    })


    const removeFavorite = (id) => {

        const updatedFavorites = favoriteProducts.filter(
            product => product.id !== id
        )

        setFavoriteProducts(updatedFavorites)

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        )
    }


    return (
        <div>

            <div className="px-4 bg-[#FAF8F4] sm:px-6 lg:px-8 py-5 sm:py-7">

                <Breadcrumb />


                <div className='flex flex-col mt-3 gap-2'>

                    <p className='text-[#2C2C2C] text-3xl sm:text-4xl font-bold'>
                        Favorites
                    </p>

                    <p className='text-[#6B6B6B] text-xs'>
                        {favoriteProducts.length} saved items
                    </p>

                </div>


                <div className='flex flex-wrap gap-2 sm:gap-3 items-center mt-3'>

                    <div className='bg-[#F7E7DE] text-[#A85F3B] rounded-2xl px-3 py-1 text-xs whitespace-nowrap'>
                        All items
                    </div>

                    <div className='bg-[#FFFFFF] text-[#6B6B6B] border border-[#E5E2DC] rounded-2xl px-3 py-1 text-xs whitespace-nowrap'>
                        Available
                    </div>

                    <div className='bg-[#FFFFFF] text-[#6B6B6B] border border-[#E5E2DC] rounded-2xl px-3 py-1 text-xs whitespace-nowrap'>
                        Sold
                    </div>

                    <div className='bg-[#FFFFFF] text-[#6B6B6B] border border-[#E5E2DC] rounded-2xl px-3 py-1 text-xs whitespace-nowrap'>
                        Price dropped
                    </div>

                </div>


                {favoriteProducts.length > 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

                        {favoriteProducts.map((item) => (

                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                                className="relative bg-[#FFFFFF] rounded-xl border border-[#E5E2DC] cursor-pointer overflow-hidden hover:bg-[#FAF8F4] transition-all duration-300"
                            >

                                <div className='relative'>

                                    <img
                                        src={item.Image}
                                        alt={item.title}
                                        className="w-full h-48 sm:h-52 lg:h-48 object-cover"
                                    />


                                    <button
                                        onClick={(e) => {

                                            e.preventDefault()
                                            e.stopPropagation()

                                            removeFavorite(item.id)

                                        }}
                                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#6B6B6B] hover:text-[#2C2C2C] hover:bg-white transition-colors cursor-pointer"
                                    >

                                        <X className="w-4 h-4" />

                                    </button>

                                </div>


                                <div className="p-3">

                                    <p className="text-sm font-semibold text-[#2C2C2C] truncate">

                                        {item.title}

                                    </p>


                                    <p className="text-sm font-bold text-[#2C2C2C] mt-2">

                                        {item.cost}

                                    </p>


                                    <p className="text-xs text-[#9A9A9A] mt-1 truncate">

                                        {item.distance
                                            ? `${item.distance} away`
                                            : item.location}

                                    </p>

                                </div>

                            </Link>

                        ))}

                    </div>

                ) : (

                    <div className="mt-6 border border-[#E5E2DC] bg-white rounded-xl px-5 sm:px-6 py-10 sm:py-12 flex flex-col items-center justify-center text-center">

                        <div className="w-12 h-12 rounded-xl bg-[#F5F2EC] flex items-center justify-center">

                            <Bookmark className="w-6 h-6 text-[#9A9A9A]" />

                        </div>

                        <p className="text-[#2C2C2C] font-semibold mt-4">
                            No saved items yet
                        </p>

                        <p className="text-[#9A9A9A] text-xs mt-1 max-w-xs">
                            Items you save while browsing will appear here.
                        </p>

                    </div>

                )}


                <div className='px-4 sm:px-5 bg-[#F5F2EC] rounded-xl py-3 mt-3 flex flex-col sm:flex-row sm:justify-between gap-3'>

                    <div className='flex gap-2 items-start sm:items-center'>

                        <Bookmark className="text-[#9A9A9A] w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />

                        <p className='text-xs text-[#6B6B6B] leading-relaxed'>

                            Saved items stay here until you remove them — tap the x on any card to clear it.

                        </p>

                    </div>


                    <Link
                        to="/browse"
                        className='flex items-center gap-1 cursor-pointer shrink-0 self-start sm:self-center'
                    >

                        <p className='text-xs text-[#C67A52]'>
                            Browse more listings
                        </p>

                        <img
                            src={arrowRight}
                            className='w-3'
                            alt=""
                        />

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default favorites
