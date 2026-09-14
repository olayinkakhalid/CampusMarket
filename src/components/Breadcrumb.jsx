import React from 'react'
import { Link } from 'react-router-dom'
import next from '../assets/next.png'
import { useNavigationHistory } from '../context/NavigationHistory.jsx'

const Breadcrumb = () => {
  const { previousPage, currentPage } = useNavigationHistory()

  return (
    <div className="flex gap-1 items-center">

      {previousPage && (
        <>
          <Link
            to={previousPage.path}
            className="text-[#9A9A9A] text-xs hover:text-[#C67A52] transition-colors"
          >
            {previousPage.name}
          </Link>

          <img
            src={next}
            className="w-3 h-3"
            alt=""
          />
        </>
      )}

      <p className="text-[#2C2C2C] text-xs">
        {currentPage.name}
      </p>

    </div>
  )
}

export default Breadcrumb