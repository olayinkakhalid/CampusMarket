import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavigationHistoryContext = createContext()

export const NavigationHistoryProvider = ({ children }) => {
  const location = useLocation()

  const previousPath = useRef(location.pathname)
  const [previousPage, setPreviousPage] = useState(null)

  const pageName = {
    "/": "Home",
    "/browse": "Browse",
    "/categories": "Categories",
    "/sellitems": "Sell items",
  }

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      setPreviousPage({
        name: pageName[previousPath.current] || "Page",
        path: previousPath.current,
      })

      previousPath.current = location.pathname
    }
  }, [location.pathname])

  return (
    <NavigationHistoryContext.Provider
      value={{
        previousPage,
        currentPage: {
          name: pageName[location.pathname] || "Page",
          path: location.pathname,
        },
      }}
    >
      {children}
    </NavigationHistoryContext.Provider>
  )
}

export const useNavigationHistory = () => {
  return useContext(NavigationHistoryContext)
}