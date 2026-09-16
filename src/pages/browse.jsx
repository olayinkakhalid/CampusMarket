import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom'

import arrowDown from '../assets/chevron-down.png'
import Breadcrumb from '../components/Breadcrumb.jsx'
import { X, LayoutGrid, List, SlidersHorizontal, ArrowUpDown, Search, ArrowUp, MapPin } from 'lucide-react';
import MiniFridge from '../assets/MiniFridge.jpg'
import NoiseCanceling from '../assets/NoiseCanceling.jpg'
import StudioSpeaker from '../assets/StudioSpeaker.jpg'
import OrganicChemistry from '../assets/OrganicChemistry.jpg'
import GrahpicalCal from '../assets/GrahpicalCal.jpg'
import Coat from '../assets/Coat.jpg'
import DeskSetup from '../assets/DeskSetup.jpg'
import GrayBedcover from '../assets/GrayBedcover.jpg'

const RecentlyAdded = [
  { id: 9, Image: MiniFridge, sellerType: 'student', distance: '0.8 km', category: 'Appliances', condition: 'Good', title: 'Mini fridge, 3.2 cu ft with freezer', cost: '$65', min: '4h ago', tag: 'New', age: 4 },
  { id: 10, Image: NoiseCanceling, sellerType: 'business', distance: '1.2 km', category: 'Appliances', condition: 'Good', title: 'Noise-cancelling over-ear headphones', cost: '$95', min: '6h ago', tag: 'New', age: 6 },
  { id: 11, Image: StudioSpeaker, sellerType: 'student', distance: '0.5 km', category: 'Appliances', condition: 'Fair', title: 'Studio monitor speakers, pair', cost: '$140', min: '2d ago', tag: '2d', age: 48 },
  { id: 5, Image: OrganicChemistry, sellerType: 'business', distance: '2.1 km', category: 'Books', condition: 'Fair', title: 'Organic chemistry model kit, 240 pieces', cost: '$22', min: '2h ago', tag: 'New', age: 2 },
  { id: 12, Image: GrahpicalCal, sellerType: 'student', distance: '0.9 km', category: 'Appliances', condition: 'Fair', title: 'TI-84 Plus graphing calculator', cost: '$40', min: '1d ago', tag: '1d', age: 24 },
  { id: 13, Image: Coat, sellerType: 'business', distance: '3.9 km', category: 'Clothing', condition: 'New', title: 'Winter parka, size M, navy', cost: '$35', min: '12h ago', tag: 'New', age: 12 },
  { id: 14, Image: DeskSetup, sellerType: 'student', distance: '2.3 km', category: 'Appliances', condition: 'Good', title: 'Standing desk converter, dual monitor', cost: '$48', min: '9h ago', tag: 'New', age: 9 },
  { id: 15, Image: GrayBedcover, sellerType: 'business', distance: '3.5 km', category: 'Clothing', condition: 'New', title: 'Twin XL bedding set, grey', cost: '$25', min: '1d ago', tag: '1d', age: 24 }
];

const Browse = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [showSort, setShowSort] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [sellerType, setSellerType] = useState("all");

  const [allcategories, setAllcategories] = useState("all");
  const [showCategories, setShowCategories] = useState(false);

  const [condition, setCondition] = useState("all");
  const [showCondition, setShowCondition] = useState(false);

  const [price, setPrice] = useState("all");
  const [showPrice, setShowPrice] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = RecentlyAdded.filter((product) => {

    const sellerTypeMatch =
      sellerType === "all" || product.sellerType === sellerType;

    const productPrice = Number(product.cost.replace("$", ""));

    const categoryMatch =
      allcategories === "all" || product.category === allcategories;

    const conditionMatch =
      condition === "all" || product.condition === condition;

    const priceMatch =
      price === "all" ||
      (price === "Under $25" && productPrice < 25) ||
      (price === "$25 - $50" && productPrice >= 25 && productPrice <= 50) ||
      (price === "$50 - $100" && productPrice > 50 && productPrice <= 100) ||
      (price === "Over $100" && productPrice > 100);

    const searchMatch =
      product.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && conditionMatch && priceMatch && searchMatch && sellerTypeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") {
      return a.age - b.age;
    }

    if (sortBy === "oldest") {
      return b.age - a.age;
    }

    const priceA = Number(a.cost.replace("$", ""));
    const priceB = Number(b.cost.replace("$", ""));

    if (sortBy === "price-low") {
      return priceA - priceB;
    }

    if (sortBy === "price-high") {
      return priceB - priceA;
    }

    return 0;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7'>

        <Breadcrumb />

        <div className='mt-5'>

          <p className='text-3xl sm:text-4xl text-[#2C2C2C] font-bold'>
            Browse listings
          </p>

          <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-3'>

            <p className='text-[#6B6B6B] text-sm pt-3'>
              1,240 items from verified Northgate students · updated 2 minutes ago
            </p>

            <div className='relative'>

              <div
                onClick={() => setShowSort(!showSort)}
                className='flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E2DC] px-3 py-2.5 rounded-xl cursor-pointer w-fit'
              >
                <ArrowUpDown className='text-[#6B6B6B] w-4 h-4 shrink-0' />

                <p className='text-[#2C2C2C] text-sm'>
                  {sortBy === "newest" && "Newest first"}
                  {sortBy === "oldest" && "Oldest first"}
                  {sortBy === "price-low" && "Price: Low to high"}
                  {sortBy === "price-high" && "Price: High to low"}
                </p>

                <img
                  className='w-4 h-4 object-contain shrink-0'
                  src={arrowDown}
                  alt='Arrow Down'
                />
              </div>

              {showSort && (
                <div className='absolute top-full right-0 mt-2 z-20 min-w-48 rounded-xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 p-2'>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sortBy === "newest"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                      }`}
                    onClick={() => {
                      setSortBy("newest");
                      setShowSort(false);
                    }}
                  >
                    Newest first
                  </p>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sortBy === "oldest"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                      }`}
                    onClick={() => {
                      setSortBy("oldest");
                      setShowSort(false);
                    }}
                  >
                    Oldest first
                  </p>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sortBy === "price-low"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                      }`}
                    onClick={() => {
                      setSortBy("price-low");
                      setShowSort(false);
                    }}
                  >
                    Price: Low to high
                  </p>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sortBy === "price-high"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                      }`}
                    onClick={() => {
                      setSortBy("price-high");
                      setShowSort(false);
                    }}
                  >
                    Price: High to low
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* Search and filters */}

        <div className='mt-5 bg-[#FFFFFF] px-2 py-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 border border-[#E5E2DC] rounded-xl'>

          <div className='border-r-0 lg:border-r lg:border-r-[#9A9A9A] pr-0 lg:pr-5 w-full lg:w-[40%]'>

            <div className='flex items-center bg-[#F5F2EC] text-[#9A9A9A] text-sm px-2 py-2 gap-1 rounded-lg w-full'>

              <Search className="text-[#9A9A9A] cursor-pointer w-5 h-5 shrink-0" />

              <input
                className='bg-[#F5F2EC] outline-none flex-1 min-w-0'
                type='text'
                placeholder='Search within listings'
                value={search}
                onChange={(e) => {
                  if (e.target.value.trim()) {
                    setSearchParams({ search: e.target.value });
                  } else {
                    setSearchParams({});
                  }
                }}
              />

            </div>

          </div>

          <div className='flex flex-wrap gap-2'>

            <div
              className='flex gap-1 items-center relative bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg border border-[#E5E2DC]'
              onClick={() => setShowCategories(!showCategories)}
            >
              <p className='text-[#2C2C2C] text-sm'>
                {allcategories === "all" ? "All categories" : allcategories}
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />

              {showCategories && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 p-2">
                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setAllcategories("all");
                      setShowCategories(false);
                    }}>All</p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setAllcategories("Books");
                      setShowCategories(false);
                    }}>Books</p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setAllcategories("Appliances");
                      setShowCategories(false);
                    }}>Appliances</p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setAllcategories("Clothing");
                      setShowCategories(false);
                    }}>Clothing</p>
                </div>
              )}
            </div>

            <div
              className='flex gap-1 relative items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'
              onClick={() => setShowCondition(!showCondition)}
            >
              <p className='text-[#2C2C2C] text-sm'>
                {condition === "all" ? "Any condition" : condition}
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />

              {showCondition && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 p-2">

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setCondition("all");
                      setShowCondition(false);
                    }}>
                    All
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setCondition("New");
                      setShowCondition(false);
                    }}>
                    New
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setCondition("Like new");
                      setShowCondition(false);
                    }}>
                    Like new
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setCondition("Good");
                      setShowCondition(false);
                    }}>
                    Good
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setCondition("Fair");
                      setShowCondition(false);
                    }}>
                    Fair
                  </p>

                </div>
              )}
            </div>

            <div
              onClick={() => setShowPrice(!showPrice)}
              className='flex gap-1 relative items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'
            >
              <p className='text-[#2C2C2C] text-sm'>
                {price === "all" ? "Any price" : price}
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />

              {showPrice && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg p-2">

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setPrice("all");
                      setShowPrice(false);
                    }}>
                    Any price
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setPrice("$25 - $50");
                      setShowPrice(false);
                    }}>
                    $25 - $50
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setPrice("Under $25");
                      setShowPrice(false);
                    }}>
                    Under $25
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setPrice("$50 - $100");
                      setShowPrice(false);
                    }}>
                    $50 - $100
                  </p>

                  <p
                    className="px-3 py-2 cursor-pointer rounded-lg text-sm text-[#2C2C2C] transition-colors duration-200 hover:bg-[#E5E2DC] hover:text-[#C67A52]"
                    onClick={() => {
                      setPrice("Over $100");
                      setShowPrice(false);
                    }}>
                    Over $100
                  </p>

                </div>
              )}
            </div>

            <div className='flex gap-1 items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>
                Any distance
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />
            </div>


            <div onClick={() => setShowMoreFilters(!showMoreFilters)} className='flex gap-1 relative items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'>
              <SlidersHorizontal className='text-[#6B6B6B] h-4' />

              <p className='text-[#2C2C2C] text-sm'>
                More filters
              </p>
              {showMoreFilters && (
                <div className="absolute top-full left-0 mt-2 z-20 min-w-40 rounded-xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 p-2">
                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sellerType === "all"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC] hover:text-[#C67A52]"
                      }`}
                    onClick={() => {
                      setSellerType("all");
                      setShowMoreFilters(false);
                    }}
                  >
                    All sellers
                  </p>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sellerType === "student"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC] hover:text-[#C67A52]"
                      }`}
                    onClick={() => {
                      setSellerType("student");
                      setShowMoreFilters(false);
                    }}
                  >
                    Students
                  </p>

                  <p
                    className={`px-3 py-2 cursor-pointer rounded-lg text-sm ${sellerType === "business"
                      ? "bg-[#F5F2EC] text-[#C67A52]"
                      : "text-[#2C2C2C] hover:bg-[#F5F2EC] hover:text-[#C67A52]"
                      }`}
                    onClick={() => {
                      setSellerType("business");
                      setShowMoreFilters(false);
                    }}
                  >
                    Businesses
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* TAG FOR SEARCHING */}

        <div className='flex flex-wrap gap-2 sm:gap-3 items-center mt-3'>

          {allcategories !== "all" && (
            <div className='flex items-center gap-2 bg-[#F5F2EC] px-3 py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>{allcategories}</p>
              <X
                className='w-4 h-4 text-[#9A9A9A] cursor-pointer'
                onClick={() => setAllcategories("all")}
              />
            </div>
          )}

          {condition !== "all" && (
            <div className='flex items-center gap-2 bg-[#F5F2EC] px-3 py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>{condition}</p>
              <X
                className='w-4 h-4 text-[#9A9A9A] cursor-pointer'
                onClick={() => setCondition("all")}
              />
            </div>
          )}

          {price !== "all" && (
            <div className='flex items-center gap-2 bg-[#F5F2EC] px-3 py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>{price}</p>
              <X
                className='w-4 h-4 text-[#9A9A9A] cursor-pointer'
                onClick={() => setPrice("all")}
              />
            </div>
          )}

          {sellerType !== "all" && (
            <div className='flex items-center gap-2 bg-[#F5F2EC] px-3 py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>
                {sellerType === "student" ? "Students" : "Businesses"}
              </p>
              <X
                className='w-4 h-4 text-[#9A9A9A] cursor-pointer'
                onClick={() => setSellerType("all")}
              />
            </div>
          )}

          {(allcategories !== "all" ||
            condition !== "all" ||
            price !== "all" ||
            sellerType !== "all") && (
              <p
                className='text-[#C67A52] text-sm cursor-pointer'
                onClick={() => {
                  setAllcategories("all");
                  setCondition("all");
                  setPrice("all");
                  setSellerType("all");
                }}
              >
                Clear all
              </p>
            )}

        </div>
      </div>

      {/* MAIN SECTION */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7 mt-3'>

        <div className='flex justify-between items-center gap-3'>

          <div>
            <p className='text-[#6B6B6B] text-xs'>
              Showing 1–8 of 1,240 listings
            </p>
          </div>

          <div className='flex items-center gap-1 bg-[#FFFFFF] px-1 py-1 rounded-lg border border-[#E5E2DC]'>

            <div
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${viewMode === "grid"
                  ? "bg-[#F5F2EC] text-[#C67A52]"
                  : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                }`}
            >
              <LayoutGrid className='w-4 h-4' />
              <p className='hidden sm:block text-sm'>Grid view</p>
            </div>

            <div
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${viewMode === "list"
                  ? "bg-[#F5F2EC] text-[#C67A52]"
                  : "text-[#2C2C2C] hover:bg-[#F5F2EC]"
                }`}
            >
              <List className='w-4 h-4' />
              <p className='hidden sm:block text-sm'>List view</p>
            </div>

          </div>

        </div>

        <div className='flex flex-col items-center'>

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-full"
                : "flex flex-col gap-3 mt-5 w-full"
            }
          >

            {sortedProducts.map((add) => {

              return (
                <Link
                  to={`/product/${add.id}`}
                  className={`bg-[#FFFFFF] rounded-xl border border-[#E5E2DC] cursor-pointer hover:bg-[#FAF8F4] transition-all duration-300 ${viewMode === "list"
                    ? "flex gap-4 p-3 w-full"
                    : "pb-3"
                    }`}
                >

                  <div
                    className={`relative ${viewMode === "list"
                      ? "shrink-0"
                      : ""
                      }`}
                  >

                    <img
                      className={`object-cover ${viewMode === "list"
                        ? "w-40 h-32 rounded-lg shrink-0"
                        : "rounded-t-xl w-full h-56 sm:h-60"
                        }`}
                      src={add.Image}
                      alt={add.title}
                    />

                    <div className="absolute top-3 left-3 bg-[#F7E3E0] px-2 py-1 text-xs rounded-lg">
                      <p className='text-[#C4574C]'>{add.tag}</p>
                    </div>

                  </div>

                  <div
                    className={` px-4 py-3 ${viewMode === "list"
                      ? "flex-1 min-w-0"
                      : ""
                      }`}
                  >

                    <p className='font-bold text-sm leading-5 truncate '>
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
                    <div className='flex items-center gap-1 text-xs text-[#9A9A9A] mt-1'>
                      <MapPin className='w-3.5 h-3.5' />
                      <span>{add.distance} away</span>
                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

          <div className='bg-[#FFFFFF] border border-[#D0CCC4] cursor-pointer mt-5 flex gap-1 items-center px-2 py-3 rounded-lg'>

            <p className='text-sm'>
              Load more listings
            </p>

            <img
              className="w-3 object-cover"
              src={arrowDown}
              alt="Arrow Down"
            />

          </div>
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

export default Browse