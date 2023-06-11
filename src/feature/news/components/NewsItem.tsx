import React from 'react'

import {NewsResponse} from '../types'

interface NewsItemProps {
  news: NewsResponse;
}
const NewsItem = ({news}: NewsItemProps) => {
  return (
    <div className="flex flex-col items-start h-full rounded shadow-md hover:shadow-lg">
      <div className="relative w-full">
        <img
          src={news.urlToImage}
          alt={news.title}
          className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl p-2">
        <div className="relative group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {news.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{news.description}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
