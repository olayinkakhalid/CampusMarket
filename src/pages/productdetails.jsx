import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import {
  ChevronLeft,
  ShieldCheck,
  ChevronRight,
  Flag,
  User,
  BadgeCheck,
  Star,
  MessageCircle,
  Heart,
  Share2,
  Clock
} from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'

import OrganicChemistry from '../assets/OrganicChemistry.jpg'
import OrganicChemistry1 from '../assets/OrganicChemistry1.jpg'
import OrganicChemistry2 from '../assets/OrganicChemistry2.jpg'
import OrganicChemistry3 from '../assets/OrganicChemistry3.jpg'

import Microeconomics from '../assets/Microeconomic.jpg'
import Microeconomics1 from '../assets/Microeconomic1.jpg'
import Microeconomics2 from '../assets/Microeconomic2.jpg'
import Microeconomics3 from '../assets/Microeconomic3.jpg'


import GrayBedcover from '../assets/GrayBedcover.jpg'
import GrayBedcover1 from '../assets/GrayBedcover1.jpg'
import GrayBedcover2 from '../assets/GrayBedcover2.jpg'
import GrayBedcover3 from '../assets/GrayBedcover3.jpg'


import DeskSetup from '../assets/DeskSetup.jpg'
import DeskSetup1 from '../assets/DeskSetup1.jpg'
import DeskSetup2 from '../assets/DeskSetup2.jpg'
import DeskSetup3 from '../assets/DeskSetup3.jpg'


import Statistics from '../assets/Statistics.jpg'
import Statistics1 from '../assets/Statistics1.jpg'
import Statistics2 from '../assets/Statistics2.webp'
import Statistics3 from '../assets/Statistics3.jpg'

import Skateboard from '../assets/Skateboard.jpg'
import Skateboard1 from '../assets/Skateboard1.jpg'
import Skateboard2 from '../assets/Skateboard2.jpg'
import Skateboard3 from '../assets/Skateboard3.jpg'


import GrahpicalCal from '../assets/GrahpicalCal.jpg'
import GrahpicalCal1 from '../assets/GrahpicalCal1.jpg'
import GrahpicalCal2 from '../assets/GrahpicalCal2.jpg'
import GrahpicalCal3 from '../assets/GrahpicalCal3.jpg'

import DrawerStorage from '../assets/DrawerStorage.jpg'
import DrawerStorage1 from '../assets/DrawerStorage1.jpg'
import DrawerStorage2 from '../assets/DrawerStorage2.jpg'
import DrawerStorage3 from '../assets/DrawerStorage3.jpg'


import Coat from '../assets/Coat.jpg'
import Coat1 from '../assets/Coat1.jpg'
import Coat2 from '../assets/Coat2.jpg'
import Coat3 from '../assets/Coat3.jpg'

import linearalgebra from '../assets/linearalgebra.jpg'
import linearalgebra1 from '../assets/linearalgebra1.jpg'
import linearalgebra2 from '../assets/linearalgebra2.jpg'
import linearalgebra3 from '../assets/linearalgebra3.jpg'

import MiniFridge from '../assets/MiniFridge.jpg'
import MiniFridge1 from '../assets/MiniFridge1.jpg'
import MiniFridge2 from '../assets/MiniFridge2.jpg'
import MiniFridge3 from '../assets/MiniFridge3.jpg'

import StudioSpeaker from '../assets/StudioSpeaker.jpg'
import StudioSpeaker1 from '../assets/StudioSpeaker1.jpg'
import StudioSpeaker2 from '../assets/StudioSpeaker2.jpg'
import StudioSpeaker3 from '../assets/StudioSpeaker3.jpg'


import NoiseCanceling from '../assets/NoiseCanceling.jpg'
import NoiseCanceling1 from '../assets/NoiseCanceling1.png'
import NoiseCanceling2 from '../assets/NoiseCanceling2.jpg'
import NoiseCanceling3 from '../assets/NoiseCanceling3.jpg'


import PhysicsScientists from '../assets/PhysicsScientists.jpg'
import PhysicsScientists1 from '../assets/PhysicsScientists1.jpg'
import PhysicsScientists2 from '../assets/PhysicsScientists2.jpg'
import PhysicsScientists3 from '../assets/PhysicsScientists3.jpg'

import airpord from '../assets/airpord.jpg'
import airpord1 from '../assets/airpord1.jpg'
import airpord2 from '../assets/airpord2.jpg'
import airpord3 from '../assets/airpord3.jpg'

import SteamedDish from '../assets/SteamedDish.jpg'
import SteamedDish1 from '../assets/SteamedDish1.jpg'
import SteamedDish2 from '../assets/SteamedDish2.jpg'
import SteamedDish3 from '../assets/SteamedDish3.jpg'


import calculus from '../assets/calculus.jpg'
import calculus1 from '../assets/calculus1.webp'
import calculus2 from '../assets/calculus2.webp'
import calculus3 from '../assets/calculus3.jpg'

import lampwithdesk from '../assets/lampwithdesk.jpg'
import lampwithdesk1 from '../assets/lampwithdesk1.jpg'
import lampwithdesk2 from '../assets/lampwithdesk2.jpg'
import lampwithdesk3 from '../assets/lampwithdesk3.jpg'

import bicycle from '../assets/bicycle.jpg'
import bicycle1 from '../assets/bicycle1.jpg'
import bicycle2 from '../assets/bicycle2.jpg'
import bicycle3 from '../assets/bicycle3.jpg'


const products = [
  {
    id: 1,
    images: [airpord, airpord1, airpord2, airpord3],
    title: 'AirPods Pro (2nd gen) with charging case',
    amount: '$139',
    tag: 'Used good',
    time: 'Posted 3 hours ago',

    sellerName: 'Olivia Bennett',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Software Engineering',
    sellerRating: '4.0',
    sellerReviewInfo: '10 campus reviews',
    sellerRepliesInfo: 'replies in 30min',
    sellerAverageTimeOfReply: 'usually replies within 35 minutes',

    description: 'Barely used for one semester — highlighting on roughly 20 pages, otherwise clean and complete. Includes the printed solutions manual and a PDF download code that has not been redeemed. Happy to meet anywhere on campus, and I can bring a spare copy of the syllabus so you can check the edition.',
    condition: 'Like new · used one semester',
    category: 'Textbooks · Mathematics',
    pickup: 'babcock Library lobby · 0.2 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 2,
    images: [calculus, calculus1, calculus2, calculus3],
    title: 'Calculus: Early Transcendentals, 8th edition',
    amount: '$38',
    tag: 'Used good',
    time: 'Posted 4 hours ago',

    sellerName: 'Daniel Okafor',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Computer Science',
    sellerRating: '4.8',
    sellerReviewInfo: '24 campus reviews',
    sellerRepliesInfo: 'replies in 10min',
    sellerAverageTimeOfReply: 'usually replies within 12 minutes',

    description: 'Good condition and well looked after throughout the semester. There are a few notes and highlighted sections inside, but all pages are intact and easy to read. No missing pages or major damage. Available for pickup anywhere around campus.',
    condition: 'Good · used for one semester',
    category: 'Textbooks · Mathematics',
    pickup: 'Babcock Library lobby · 0.3 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 3,
    images: [lampwithdesk, lampwithdesk1, lampwithdesk2, lampwithdesk3],
    title: 'IKEA desk lamp with warm LED bulb',
    amount: '$16',
    tag: 'Like New',
    time: 'Posted 5 hours ago',

    sellerName: 'Emily Carter',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Accounting',
    sellerRating: '4.5',
    sellerReviewInfo: '17 campus reviews',
    sellerRepliesInfo: 'replies in 20min',
    sellerAverageTimeOfReply: 'usually replies within 22 minutes',

    description: 'Bought this for late-night studying and barely used it. The lamp works perfectly and the warm LED bulb is included. No scratches or visible damage, and the adjustable neck still holds its position properly. Great for a study desk or bedside table.',
    condition: 'Like new · barely used',
    category: 'Home & Living · Lighting',
    pickup: 'Student Centre entrance · 0.5 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 4,
    images: [bicycle, bicycle1, bicycle2, bicycle3],
    title: 'Trek hybrid bike, tuned for campus riding',
    amount: '$185',
    tag: 'Like new',
    time: 'Posted 6 hours ago',

    sellerName: 'Michael Adeyemi',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Mechanical Engineering',
    sellerRating: '3.9',
    sellerReviewInfo: '8 campus reviews',
    sellerRepliesInfo: 'replies in 45min',
    sellerAverageTimeOfReply: 'usually replies within 40 minutes',

    description: 'Well-maintained hybrid bike that has mainly been used to get around campus. Gears shift smoothly, brakes work properly, and the tires are in good condition. Recently tuned and ready to ride. Comes with the original kickstand.',
    condition: 'Like new · lightly used',
    category: 'Sports & Outdoors · Bicycles',
    pickup: 'Main gate parking area · 0.7 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 5,
    images: [OrganicChemistry, OrganicChemistry1, OrganicChemistry2, OrganicChemistry3],
    title: 'Organic chemistry model kit, 240 pieces',
    amount: '$22',
    tag: 'New',
    time: 'Posted 2 hours ago',

    sellerName: 'Sarah Williams',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Biochemistry',
    sellerRating: '4.6',
    sellerReviewInfo: '14 campus reviews',
    sellerRepliesInfo: 'replies in 15min',
    sellerAverageTimeOfReply: 'usually replies within 18 minutes',

    description: 'Complete organic chemistry model kit with 240 pieces. All major pieces are included and everything is in good working condition. Barely used during practical sessions and kept neatly in its storage case.',
    condition: 'Like new · barely used',
    category: 'School Supplies · Chemistry',
    pickup: 'Science Complex entrance · 0.4 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 6,
    images: [Statistics, Statistics1, Statistics2, Statistics3],
    title: 'Statistics',
    amount: '$27',
    tag: 'Best value',
    time: 'Posted 8 hours ago',

    sellerName: 'David Johnson',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Computer Science',
    sellerRating: '4.2',
    sellerReviewInfo: '11 campus reviews',
    sellerRepliesInfo: 'replies in 25min',
    sellerAverageTimeOfReply: 'usually replies within 28 minutes',

    description: 'Statistics textbook in good condition with some highlighted sections and notes from previous coursework. All pages are intact and the book is still easy to read.',
    condition: 'Good · used one semester',
    category: 'Textbooks · Statistics',
    pickup: 'Babcock Library lobby · 0.3 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 7,
    images: [linearalgebra, linearalgebra1, linearalgebra2, linearalgebra3],
    title: 'Linear Algebra',
    amount: '$30',
    tag: 'Best value',
    time: 'Posted 1 hour ago',

    sellerName: 'James Adewale',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Mathematics',
    sellerRating: '4.7',
    sellerReviewInfo: '19 campus reviews',
    sellerRepliesInfo: 'replies in 12min',
    sellerAverageTimeOfReply: 'usually replies within 15 minutes',

    description: 'Well-kept linear algebra textbook used for one semester. Contains a few handwritten notes and highlighted formulas, but there is no major damage or missing content.',
    condition: 'Good · lightly used',
    category: 'Textbooks · Mathematics',
    pickup: 'Babcock Library lobby · 0.2 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 8,
    images: [PhysicsScientists, PhysicsScientists1, PhysicsScientists2, PhysicsScientists3],
    title: 'Physics for Scientists, Volume 1',
    amount: '$43',
    tag: 'New',
    time: 'Posted 2 hours ago',

    sellerName: 'Daniel Williams',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Physics',
    sellerRating: '4.4',
    sellerReviewInfo: '13 campus reviews',
    sellerRepliesInfo: 'replies in 20min',
    sellerAverageTimeOfReply: 'usually replies within 23 minutes',

    description: 'Physics textbook in excellent condition with minimal signs of use. Pages are clean and intact with only a few sections highlighted. Suitable for first-year physics courses.',
    condition: 'Like new · lightly used',
    category: 'Textbooks · Physics',
    pickup: 'Physics Department entrance · 0.5 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 9,
    images: [MiniFridge, MiniFridge1, MiniFridge2, MiniFridge3],
    title: 'Mini fridge, 3.2 cu ft with freezer',
    amount: '$65',
    tag: 'New',
    time: 'Posted 4 hours ago',

    sellerName: 'Grace Thompson',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Accounting',
    sellerRating: '4.8',
    sellerReviewInfo: '21 campus reviews',
    sellerRepliesInfo: 'replies in 10min',
    sellerAverageTimeOfReply: 'usually replies within 12 minutes',

    description: 'Compact mini fridge with a small freezer compartment. Cools properly and has been kept clean throughout use. Great size for a dorm room or student apartment.',
    condition: 'Good · used one year',
    category: 'Home & Living · Appliances',
    pickup: 'West Hall entrance · 0.6 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 10,
    images: [NoiseCanceling, NoiseCanceling1, NoiseCanceling2, NoiseCanceling3],
    title: 'Noise-cancelling over-ear headphones',
    amount: '$95',
    tag: 'New',
    time: 'Posted 6 hours ago',

    sellerName: 'Michael Brown',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Software Engineering',
    sellerRating: '4.3',
    sellerReviewInfo: '16 campus reviews',
    sellerRepliesInfo: 'replies in 18min',
    sellerAverageTimeOfReply: 'usually replies within 20 minutes',

    description: 'Comfortable over-ear headphones with active noise cancellation. Battery still lasts well and the ear cushions are in excellent condition. Includes charging cable and carrying case.',
    condition: 'Like new · lightly used',
    category: 'Electronics · Audio',
    pickup: 'Student Centre entrance · 0.4 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 11,
    images: [StudioSpeaker, StudioSpeaker1, StudioSpeaker2, StudioSpeaker3],
    title: 'Studio monitor speakers, pair',
    amount: '$140',
    tag: 'Like new',
    time: 'Posted 2 days ago',

    sellerName: 'Chris Anderson',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Music',
    sellerRating: '4.1',
    sellerReviewInfo: '9 campus reviews',
    sellerRepliesInfo: 'replies in 35min',
    sellerAverageTimeOfReply: 'usually replies within 38 minutes',

    description: 'Pair of studio monitor speakers with clear sound and working controls. Used mainly for music practice and kept in good condition. Both speakers are working properly.',
    condition: 'Good · lightly used',
    category: 'Electronics · Audio',
    pickup: 'Music Department entrance · 0.8 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 12,
    images: [GrahpicalCal, GrahpicalCal1, GrahpicalCal2, GrahpicalCal3],
    title: 'TI-84 Plus graphing calculator',
    amount: '$40',
    tag: 'Like new',
    time: 'Posted 1 day ago',

    sellerName: 'Samuel Okoro',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Mathematics',
    sellerRating: '4.6',
    sellerReviewInfo: '15 campus reviews',
    sellerRepliesInfo: 'replies in 14min',
    sellerAverageTimeOfReply: 'usually replies within 16 minutes',

    description: 'TI-84 Plus graphing calculator in excellent working condition. Screen is clear, buttons work properly, and the calculator has been used mainly for mathematics and statistics courses.',
    condition: 'Like new · lightly used',
    category: 'School Supplies · Calculators',
    pickup: 'Babcock Library lobby · 0.3 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 13,
    images: [Coat, Coat1, Coat2, Coat3],
    title: 'Winter parka, size M, navy',
    amount: '$35',
    tag: 'Like new',
    time: 'Posted 12 hours ago',

    sellerName: 'Rachel Carter',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Business Administration',
    sellerRating: '4.5',
    sellerReviewInfo: '12 campus reviews',
    sellerRepliesInfo: 'replies in 22min',
    sellerAverageTimeOfReply: 'usually replies within 25 minutes',

    description: 'Navy winter parka in very good condition. Worn only a few times and stored properly. The zipper, buttons and pockets all work normally.',
    condition: 'Like new · barely used',
    category: 'Clothing · Jackets',
    pickup: 'North Hall entrance · 0.5 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 14,
    images: [DeskSetup, DeskSetup1, DeskSetup2, DeskSetup3],
    title: 'Standing desk converter, dual monitor',
    amount: '$48',
    tag: 'New',
    time: 'Posted 9 hours ago',

    sellerName: 'Kevin James',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Computer Science',
    sellerRating: '4.7',
    sellerReviewInfo: '18 campus reviews',
    sellerRepliesInfo: 'replies in 16min',
    sellerAverageTimeOfReply: 'usually replies within 18 minutes',

    description: 'Adjustable standing desk converter designed for a dual-monitor setup. Stable, easy to adjust and large enough for a laptop or keyboard setup.',
    condition: 'Like new · lightly used',
    category: 'Furniture · Desks',
    pickup: 'South Quad · 0.7 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 15,
    images: [GrayBedcover, GrayBedcover1, GrayBedcover2, GrayBedcover3],
    title: 'Twin XL bedding set, grey',
    amount: '$25',
    tag: 'Like new',
    time: 'Posted 1 day ago',

    sellerName: 'Amanda Lewis',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Nursing',
    sellerRating: '4.4',
    sellerReviewInfo: '10 campus reviews',
    sellerRepliesInfo: 'replies in 20min',
    sellerAverageTimeOfReply: 'usually replies within 23 minutes',

    description: 'Grey Twin XL bedding set suitable for a student dorm room. Clean and lightly used, with no visible damage or stains.',
    condition: 'Good · lightly used',
    category: 'Home & Living · Bedding',
    pickup: 'East Hall entrance · 0.4 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 16,
    images: [Skateboard, Skateboard1, Skateboard2, Skateboard3],
    title: 'Skateboard',
    amount: '$45',
    tag: 'Like new',
    time: 'Posted 5 hours ago',

    sellerName: 'Alex Morgan',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Mass Communication',
    sellerRating: '4.0',
    sellerReviewInfo: '7 campus reviews',
    sellerRepliesInfo: 'replies in 30min',
    sellerAverageTimeOfReply: 'usually replies within 33 minutes',

    description: 'Barely used skateboard with wheels and trucks in good condition. Mainly used around campus and stored indoors when not in use.',
    condition: 'Like new · lightly used',
    category: 'Sports & Outdoors · Skateboards',
    pickup: 'Student Centre entrance · 0.3 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 17,
    images: [SteamedDish, SteamedDish1, SteamedDish2, SteamedDish3],
    title: 'Rice cooker with steamer basket',
    amount: '$18',
    tag: 'Good',
    time: 'Posted yesterday',

    sellerName: 'Joseph Adekunle',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Economics',
    sellerRating: '4.2',
    sellerReviewInfo: '8 campus reviews',
    sellerRepliesInfo: 'replies in 25min',
    sellerAverageTimeOfReply: 'usually replies within 28 minutes',

    description: 'Compact rice cooker with a removable inner pot and steamer basket. Works properly and is convenient for preparing meals in a student apartment.',
    condition: 'Good · used one semester',
    category: 'Home & Living · Kitchen',
    pickup: 'Riverside Apartments · 0.6 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 18,
    images: [DrawerStorage, DrawerStorage1, DrawerStorage2, DrawerStorage3],
    title: 'Desk organizer set with drawer',
    amount: '$12',
    tag: 'New',
    time: 'Posted 2 days ago',

    sellerName: 'Ella Martin',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Education',
    sellerRating: '4.5',
    sellerReviewInfo: '6 campus reviews',
    sellerRepliesInfo: 'replies in 18min',
    sellerAverageTimeOfReply: 'usually replies within 20 minutes',

    description: 'Compact desk organizer set with multiple compartments and a small drawer. Useful for keeping stationery, cables and other study materials organized.',
    condition: 'New · unused',
    category: 'School Supplies · Organization',
    pickup: 'South Quad · 0.5 mi',
    offer: 'Open to reasonable offers'
  },

  {
    id: 19,
    images: [Microeconomics, Microeconomics1, Microeconomics2, Microeconomics3],
    title: 'Microeconomics, 3rd edition',
    amount: '$29',
    tag: 'Used good',
    time: 'Posted 3 hours ago',

    sellerName: 'Peter Johnson',
    campusVerified: true,
    trustedSeller: false,
    sellerCampus: 'Babcock University',
    sellerDepartment: 'Economics',
    sellerRating: '4.3',
    sellerReviewInfo: '13 campus reviews',
    sellerRepliesInfo: 'replies in 24min',
    sellerAverageTimeOfReply: 'usually replies within 27 minutes',

    description: 'Microeconomics textbook used for one semester. Contains some highlighted sections and handwritten notes, but the pages are intact and the book remains in good readable condition.',
    condition: 'Good · used one semester',
    category: 'Textbooks · Economics',
    pickup: 'Babcock Library lobby · 0.3 mi',
    offer: 'Open to reasonable offers'
  }
]

const Similarlisting = [
  { id: 5, Image: OrganicChemistry, title: 'Organic Chemistry, 9th edition', amount: '$32', time: '5h ago', tag: 'New' },
  { id: 6, Image: Statistics, title: 'Statistics for Engineers, 4th ed.', amount: '$27', time: '8h ago', tag: 'Best value' },
  { id: 7, Image: linearalgebra, title: 'Linear Algebra, 5th edition', amount: '$30', time: '1h ago', tag: 'Best value' },
  { id: 8, Image: PhysicsScientists, title: 'Physics for Scientists, Volume 1', amount: '$43', time: '2h ago', tag: 'New' }
]


const productdetails = () => {
  const { id } = useParams()

  const product = products.find(item => item.id === Number(id))

  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <p>Product not found</p>
  }

  const nextImage = () => {
    setSelectedImage(
      selectedImage === product.images.length - 1
        ? 0
        : selectedImage + 1
    )
  }

  const previousImage = () => {
    setSelectedImage(
      selectedImage === 0
        ? product.images.length - 1
        : selectedImage - 1
    )
  }

  return (
    <div>

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7'>
        {/* BREADCRUMB */}
        <Breadcrumb productName={product.title} />


        {/* MAIN CONTENT */}
        <div className='flex flex-col lg:flex-row gap-8 justify-between mt-2'>

          {/* LEFT SIDE */}
          <div className='flex-1 min-w-0'>

            {/* GALLERY */}
            <div>

              {/* BIG IMAGE */}
              <div className='relative mt-5 w-full aspect-[4/3] rounded-xl overflow-hidden'>

                <div className='w-full h-full flex items-center justify-center'>

                  <img
                    className='w-full h-full object-cover rounded-xl'
                    src={product.images[selectedImage]}
                    alt={product.title}
                  />

                  {/* PHOTO COUNT */}
                  <div className='px-2 py-1.5 rounded-xl bg-[#444444] absolute top-5 left-5'>
                    <p className='text-[#FFFFFF] text-xs'>
                      {selectedImage + 1}/4 photos
                    </p>
                  </div>

                </div>


                {/* LEFT ARROW */}
                <button
                  onClick={previousImage}
                  className='bg-[#FFFFFF] rounded-full absolute top-1/2 -translate-y-1/2 left-5 p-2 cursor-pointer hover:bg-gray-100 transition-colors'
                >
                  <ChevronLeft />
                </button>


                {/* RIGHT ARROW */}
                <button
                  onClick={nextImage}
                  className='bg-[#FFFFFF] rounded-full absolute top-1/2 -translate-y-1/2 right-5 p-2 cursor-pointer hover:bg-gray-100 transition-colors'
                >
                  <ChevronRight />
                </button>

              </div>


              {/* 4 SMALL IMAGES */}
              <div className='flex gap-3 mt-3 overflow-x-auto pb-1'>

                {product.images.map((image, index) => (

                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-24 h-20 shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage === index
                      ? 'border-[#C67A52]'
                      : 'border-transparent'
                      }`}
                  >

                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className='w-full h-full object-cover'
                    />

                  </button>

                ))}

              </div>

            </div>


            {/* DESCRIPTION + ITEM DETAILS */}
            <div className='bg-[#FFFFFF] rounded-xl flex flex-col w-full mt-5 pt-10 pb-10 border border-[#E5E2DC]'>

              {/* DESCRIPTION */}
              <div className='px-5 sm:px-8'>

                <p className='text-[#2C2C2C] font-bold text-lg'>
                  Description
                </p>

                <p className='text-sm text-[#6B6B6B] pt-3 pb-5 border-b border-[#E5E2DC]'>
                  {product.description}
                </p>

              </div>


              {/* ITEM DETAILS */}
              <div className='mt-5 px-5 sm:px-8'>

                <p className='text-[#2C2C2C] font-bold text-lg'>
                  Item details
                </p>


                <div className='flex flex-col'>

                  <div className='flex items-start pt-5'>
                    <p className='w-32 sm:w-40 shrink-0 text-[#9A9A9A] text-xs'>
                      Condition
                    </p>

                    <p className='text-[#2C2C2C] text-xs'>
                      {product.condition}
                    </p>
                  </div>


                  <div className='flex items-start pt-5'>
                    <p className='w-32 sm:w-40 shrink-0 text-[#9A9A9A] text-xs'>
                      Category
                    </p>

                    <p className='text-[#2C2C2C] text-xs'>
                      {product.category}
                    </p>
                  </div>


                  <div className='flex items-start pt-5'>
                    <p className='w-32 sm:w-40 shrink-0 text-[#9A9A9A] text-xs'>
                      Pickup
                    </p>

                    <p className='text-[#2C2C2C] text-xs'>
                      {product.pickup}
                    </p>
                  </div>


                  <div className='flex items-start pt-5'>
                    <p className='w-32 sm:w-40 shrink-0 text-[#9A9A9A] text-xs'>
                      Offer
                    </p>

                    <p className='text-[#2C2C2C] text-xs'>
                      {product.offer}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className='flex px-3 py-3 bg-[#E4F0E7] items-center gap-2 mt-5 rounded-lg'>
              <div className='bg-[#FFFFFF] rounded-xl px-2 py-2 max-md:px-1'>
                <ShieldCheck className='text-[#4E8F63] max-md:h-4' />
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-[#2C2C2C] font-bold max-md:text-sm'>
                  Meet at a verified campus hub
                </p>

                <p className='text-[#6B6B6B] text-sm max-md:text-xs'>
                  Library lobby, Student Union or any residence front desk. Never share your dorm key or pay before you see the item.

                </p>
              </div>
            </div>

          </div>


          {/* RIGHT CARD */}

          <div>


            <div className='bg-[#FFFFFF] border border-[#E5E2DC] px-3 py-3 h-fit min-h-[400px] w-full lg:w-[420px] shrink-0 rounded-xl lg:mt-5'>

              {/* PRODUCT INFO */}
              <div className='border-b border-[#E5E2DC] pb-5'>

                <div className='flex gap-3 items-center'>

                  <p className='bg-[#F5F2EC] text-[#6B6B6B] text-xs px-2 py-1 rounded-lg'>
                    {product.tag}
                  </p>

                  <p className='text-[#9A9A9A] text-xs'>
                    {product.time}
                  </p>

                </div>


                <div className='mt-3'>

                  <p className='text-[#2C2C2C] font-bold text-xl'>
                    {product.title}
                  </p>

                </div>


                <div className='flex gap-2 mt-2 items-center'>

                  <p className='text-[#2C2C2C] font-bold text-xl'>
                    {product.amount}
                  </p>

                  <p className='text-[#9A9A9A] text-xs'>
                    or best offer
                  </p>

                </div>

              </div>


              {/* SELLER */}
              <div className='mt-3 flex flex-col'>

                <div className='flex gap-2 items-start'>

                  {/* PROFILE ICON */}
                  <div className='bg-[#F5F2EC] rounded-full w-9 h-9 shrink-0 flex items-center justify-center border border-[#E5E2DC]'>
                    <User className='w-4 h-4 text-[#6B6B6B]' />
                  </div>


                  {/* SELLER INFO */}
                  <div className='flex flex-col gap-[2px] items-start min-w-0'>

                    {/* NAME + VERIFICATION */}
                    <div className='flex gap-2 items-center flex-wrap'>

                      <p className='text-[#2C2C2C] font-bold text-sm'>
                        {product.sellerName}
                      </p>


                      {/* VERIFICATION */}
                      {(product.campusVerified || product.trustedSeller) && (
                        <div className='flex gap-1 items-center bg-[#E4F0E7] px-2 py-[2px] rounded-xl'>
                          <BadgeCheck className='text-[#4E8F63] w-3 h-4' />

                          <div className='text-[#4E8F63] text-xs'>
                            {product.campusVerified && (
                              <p>Campus Verified</p>
                            )}

                            {product.trustedSeller && (
                              <p>Trusted Seller</p>
                            )}
                          </div>
                        </div>
                      )}

                    </div>


                    {/* DEPARTMENT + CAMPUS */}
                    <div className='flex gap-1 items-center flex-wrap'>

                      <p className='text-xs text-[#9A9A9A]'>
                        {product.sellerDepartment}
                      </p>

                      <p className='text-xs text-[#9A9A9A]'>
                        ·
                      </p>

                      <p className='text-xs text-[#9A9A9A]'>
                        {product.sellerCampus}
                      </p>

                    </div>


                    {/* RATING */}
                    <div className='flex gap-1 items-center flex-wrap'>

                      <Star className='text-[#B98A2E] w-3 h-3' />

                      <p className='text-xs text-[#9A9A9A]'>
                        {product.sellerRating}
                      </p>

                      <p className='text-xs text-[#9A9A9A]'>
                        ·
                      </p>

                      <p className='text-xs text-[#6B6B6B]'>
                        {product.sellerReviewInfo}
                      </p>

                      <p className='text-xs text-[#9A9A9A]'>
                        ·
                      </p>

                      <p className='text-xs text-[#6B6B6B]'>
                        {product.sellerRepliesInfo}
                      </p>

                    </div>

                  </div>

                </div>


                {/* MESSAGE SELLER */}
                <button className='w-full flex gap-1 items-center justify-center hover:bg-[#A86540] transition-colors duration-200 px-4 py-3 rounded-lg mt-3 bg-[#C67A52] cursor-pointer text-[#FFFFFF]'>

                  <MessageCircle className='h-4 w-4 text-[#FFFFFF]' />

                  Message seller

                </button>


                {/* SAVE + SHARE */}
                <div className='flex gap-3 mt-5 items-center justify-center'>

                  <button className='flex-1 flex items-center justify-center gap-1 px-3 py-3 cursor-pointer border hover:bg-gray-100 transition-all duration-300 border-[#D0CCC4] bg-[#FFFFFF] rounded-lg text-sm'>

                    <Heart className='text-[#6B6B6B] h-4 w-4' />

                    Save item

                  </button>


                  <button className='flex-1 flex items-center justify-center gap-1 px-3 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-[#D0CCC4] bg-[#FFFFFF] rounded-lg text-sm'>

                    <Share2 className='text-[#6B6B6B] h-4 w-4' />

                    Share

                  </button>

                </div>


                {/* RESPONSE TIME */}
                <div className='text-[#9A9A9A] flex gap-1 items-center mt-8 max-sm:mt-4'>

                  <Clock className='h-3 w-3 shrink-0' />

                  <p className='text-xs'>
                    {product.sellerAverageTimeOfReply}
                  </p>

                </div>

              </div>

            </div>

            <div className='text-[#6B6B6B] flex gap-2 bg-[#F5F2EC] rounded-xl px-2 py-4 mt-5 cursor-pointer'>
              <Flag className='h-4' />

              <p className='text-xs'>
                Report this listing to campus moderators
              </p>
            </div>
          </div>


        </div>


      </div>


      {/* SECTION 4 */}

      <div className='bg-[#FAF8F4] px-4 sm:px-6 lg:px-8 py-7 pt-10'>


        <Link to='/browse' className='flex flex-col sm:flex-row sm:justify-between gap-2 mt-5'>
          <div className='font-bold text-xl text-[#2C2C2C]'>
            <p>
              Similar listings nearby
            </p>
          </div>

          <p className='text-[#C67A52] flex gap-1 text-sm items-center cursor-pointer'>
            See all in Textbooks
            <img className='w-3 h-3' src={arrowRight} alt="" />
          </p>

        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

          {Similarlisting.map((add) => {

            return (
              <Link
                to={`/product/${add.id}`}
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
                      {add.amount}
                    </p>

                    <p className='text-xs text-[#9A9A9A]'>
                      {add.time}
                    </p>

                  </div>

                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </div>
  )
}

export default productdetails