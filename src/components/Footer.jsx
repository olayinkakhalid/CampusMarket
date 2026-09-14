import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-[#F5F2EC] border border-t-[#E5E2DC] px-4 sm:px-6 lg:px-8 py-7 pt-10">

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">

        {/* Logo and description */}
        <div className="flex flex-col shrink-0">

          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <GraduationCap className="w-7 h-7" />
            <p>CampusMarket</p>
          </Link>

          <div className="mt-5">
            <p className="text-[#6B6B6B] text-sm max-w-90">
              The student marketplace for Northgate University. Buy, sell and trade safely with verified campus members.
            </p>
          </div>

        </div>


        {/* Footer links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 w-full lg:w-auto">

          {/* Marketplace */}
          <ul className="flex flex-col gap-2 text-[#6B6B6B] text-sm">
            <li className="text-[#9A9A9A] text-xs mb-1">
              Marketplace
            </li>

            <li><Link to="/">Browse all items</Link></li>
            <li><Link to="/">Marketplace</Link></li>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/">Featured listings</Link></li>
            <li><Link to="/">Sell an item</Link></li>
          </ul>


          {/* Support */}
          <ul className="flex flex-col gap-2 text-[#6B6B6B] text-sm">
            <li className="text-[#9A9A9A] text-sm mb-1">
              Support
            </li>

            <li><Link to="/">Help center</Link></li>
            <li><Link to="/">Safety tips</Link></li>
            <li><Link to="/">Report an issue</Link></li>
            <li><Link to="/">Contact us</Link></li>
          </ul>


          {/* Campus */}
          <ul className="flex flex-col gap-2 text-[#6B6B6B] text-sm">
            <li className="text-[#9A9A9A] text-sm mb-1">
              Campus
            </li>

            <li><Link to="/">About CampusMarket</Link></li>
            <li><Link to="/">Campus partners</Link></li>
            <li><Link to="/">Student ambassadors</Link></li>
            <li><Link to="/">Careers</Link></li>
          </ul>


          {/* Legal */}
          <ul className="flex flex-col gap-2 text-[#6B6B6B] text-sm">
            <li className="text-[#9A9A9A] text-sm mb-1">
              Legal
            </li>

            <li><Link to="/">Terms of service</Link></li>
            <li><Link to="/">Privacy policy</Link></li>
            <li><Link to="/">Cookie settings</Link></li>
            <li><Link to="/">Community guidelines</Link></li>
          </ul>

        </div>

      </div>


      {/* Bottom section */}
      <div className="mt-10 pt-5 border-t border-[#E5E2DC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <p className="text-sm text-[#9A9A9A]">
          © 2025 CampusMarket · Northgate University Built by students, for students.
        </p>

        <div className="text-[#9A9A9A] text-sm">

          <ul className="flex flex-wrap gap-x-5 gap-y-2 items-center">

            <li>
              <Link to="/">Privacy</Link>
            </li>

            <li>
              <Link to="/">Terms</Link>
            </li>

            <li>
              <Link to="/">Cookies</Link>
            </li>

            <li>
              <Link to="/">Campus safety</Link>
            </li>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Footer