import React, {useEffect, useRef} from 'react'
import Error from 'src/components/error/Error'
import Loading from 'src/components/loading/Loading'
import useApi from 'src/hooks/useApi'
import {API_ROUTES} from 'src/utils/constants'

import {NewsApiResponse, NewsResponse, Source} from '../types'

interface NewsSectionProps {
  source: Source;
}

const NewsSection = ({source}: NewsSectionProps) => {
  const {loading, error, getRequest} = useApi()
  const headlines = useRef<NewsResponse[]>([])

  useEffect(() => {
    fetchHeadlines()
  }, [source])

  const fetchHeadlines = () => {
    const url = `${API_ROUTES.TOP_HEADLINES}?sources=${source.id}`
    getRequest<NewsApiResponse>(url).then(response => {
      if(response) headlines.current = response.articles
    })
  }

  if(loading) {
    return <Loading />
  }

  if(error) {
    return <Error message={error} />
  }

  return (
    <>
      {headlines.current.length > 0 &&
      <div className="mt-4">
        <h2 className="font-bold">Headlines</h2>
        <ul className="grid grid-cols-2 mt-4 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {headlines.current.map(news =>
            <a href={news.url} target="_blank" key={news.title} className="relative" rel="noreferrer">
              <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-h-7 aspect-w-10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={news.urlToImage} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {news.title}</span>
                </button>
              </div>
              <p className="block mt-2 text-sm font-medium text-gray-900 pointer-events-none">{news.title}</p>
            </a>
          )}
        </ul>
      </div>
      }
    </>
  )
}

export default NewsSection
