import { useEffect, useState } from "react";
import arrowDown from '../assets/chevron-down.png'
import Breadcrumb from '../components/Breadcrumb.jsx'
import { X, LayoutGrid, SlidersHorizontal, ArrowUpDown, Search, ArrowUp } from 'lucide-react';
import MiniFridge from '../assets/MiniFridge.jpg'
import NoiseCanceling from '../assets/NoiseCanceling.jpg'
import StudioSpeaker from '../assets/StudioSpeaker.jpg'
import OrganicChemistry from '../assets/OrganicChemistry.jpg'
import GrahpicalCal from '../assets/GrahpicalCal.jpg'
import Coat from '../assets/Coat.jpg'
import DeskSetup from '../assets/DeskSetup.jpg'
import GrayBedcover from '../assets/GrayBedcover.jpg'

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

const Browse = () => {

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

            <div className='flex items-center gap-2 bg-[#FFFFFF] border border-[#E5E2DC] px-3 py-2.5 rounded-xl cursor-pointer w-fit'>
              <ArrowUpDown className='text-[#6B6B6B] w-4 h-4 shrink-0' />

              <p className='text-[#2C2C2C] text-sm'>
                Newest first
              </p>

              <img
                className='w-4 h-4 object-contain shrink-0'
                src={arrowDown}
                alt='Arrow Down'
              />
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
              />

            </div>

          </div>

          <div className='flex flex-wrap gap-2'>

            <div className='flex gap-1 items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg border border-[#E5E2DC]'>
              <p className='text-[#2C2C2C] text-sm'>
                All categories
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />
            </div>

            <div className='flex gap-1 items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>
                Any condition
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />
            </div>

            <div className='flex gap-1 items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'>
              <p className='text-[#2C2C2C] text-sm'>
                Any price
              </p>

              <img
                className='w-3 object-cover h-4'
                src={arrowDown}
                alt='Arrow Down'
              />
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

            <div className='flex gap-1 items-center bg-[#F5F2EC] px-3 cursor-pointer py-2 rounded-lg'>
              <SlidersHorizontal className='text-[#6B6B6B] h-4' />

              <p className='text-[#2C2C2C] text-sm'>
                More filters
              </p>
            </div>

          </div>

        </div>

        {/* TAG FOR SEARCHING */}

        <div className='flex flex-wrap gap-2 sm:gap-3 items-center mt-3'>

          <div className='flex items-center gap-1 cursor-pointer bg-[#F5F2EC] border border-none px-2 py-2 rounded-lg'>
            <p className='text-sm text-[#2C2C2C]'>
              Textbooks
            </p>
            <X className='w-3' />
          </div>

          <div className='flex items-center gap-1 cursor-pointer bg-[#F5F2EC] border border-none px-2 py-2 rounded-lg'>
            <p className='text-sm text-[#2C2C2C]'>
              Under $50
            </p>
            <X className='w-3' />
          </div>

          <div className='flex items-center gap-1 cursor-pointer bg-[#F5F2EC] border border-none px-2 py-2 rounded-lg'>
            <p className='text-sm text-[#2C2C2C]'>
              Within 1 mile
            </p>
            <X className='w-3' />
          </div>

          <div className='flex items-center gap-1 cursor-pointer bg-[#F5F2EC] border border-none px-2 py-2 rounded-lg'>
            <p className='text-sm text-[#2C2C2C]'>
              Like new or better
            </p>
            <X className='w-3' />
          </div>

          <p className='text-[#C67A52] text-sm cursor-pointer'>
            Clear all
          </p>

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

          <div className='flex items-center gap-1 bg-[#FFFFFF] px-3 py-2 rounded-lg cursor-pointer border border-[#E5E2DC]'>
            <LayoutGrid className='w-3' />

            <p className='text-[#2C2C2C] text-sm'>
              Grid view
            </p>
          </div>

        </div>

        <div className='flex flex-col items-center'>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-full">

            {RecentlyAdded.map((add) => {

              return (
                <div
                  key={add.id}
                  className='bg-[#FFFFFF] pb-3 rounded-xl border border-[#E5E5E5] cursor-pointer hover:bg-[#FAF8F4] transition-all duration-300'
                >

                  <div className='relative'>

                    <img
                      className='rounded-t-xl w-full h-56 sm:h-60 object-cover'
                      src={add.Image}
                      alt={add.title}
                    />

                    <div className="absolute top-3 left-3 bg-[#F7E3E0] px-2 py-1 text-xs rounded-lg">
                      <p className='text-[#C4574C]'>{add.tag}</p>
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

                </div>
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