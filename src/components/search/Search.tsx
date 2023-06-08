import React from 'react'
import {APP_ASSETS} from 'src/utils/constants'

const Search = () => {
  return (
    <div className="flex items-center px-4 py-4 lg:mx-0 lg:max-w-none xl:px-0">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img className="w-5 h-5 " src={APP_ASSETS.MAGNIFIER} alt="" />
          </div>
          <input id="search" name="search" className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
        </div>
      </div>
    </div>
  )
}

export default Search
