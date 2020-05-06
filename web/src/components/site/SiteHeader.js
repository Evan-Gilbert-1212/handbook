import React from 'react'
import { useUIContext } from '../../context/UIContext'

export function SiteHeader() {
  const { openSidebar } = useUIContext()

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
        aria-label="Open Sidebar"
        onClick={openSidebar}
      >
        <i className="far fa-bars"></i>
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <label htmlFor="search_field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <i className="far fa-search"></i>
              </div>
              <input
                id="search_field"
                className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <a href="https://github.com/suncoast-devs/handbook">
            <i className="fab fa-github-alt"></i>
          </a>
        </div>
      </div>
    </div>
  )
}