import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {requestGet} from 'src/apiClient/apiClient'
import {API_ROUTES} from 'src/apiClient/apiRoutes'
import {RootState} from 'src/store/store'
import {STATIC_NEWS_SOURCES} from 'src/utils/constants'

import {NewsResponse, Source} from './types'

const News = () => {
  const apiKey = useSelector((state: RootState) => state.auth.user?.apiKey)
  const [sources, setSources] = useState<Source>(STATIC_NEWS_SOURCES[0])
  const [headlines, setHeadlines] = useState<NewsResponse[]>([])

  useEffect(() => {
    fetchHeadlines()
  }, [sources])

  const fetchHeadlines = () => {
    if(apiKey) {
      const url = `${API_ROUTES.TOP_HEADLINES}?sources=${sources.id}`
      requestGet(url, apiKey).then(response => {
        setHeadlines(response.data.articles)
      })
    }
  }

  return (
    <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <nav className="flex space-x-4" aria-label="Tabs">
          {STATIC_NEWS_SOURCES.map(source =>
            <button key={source.id} onClick={() => setSources(source)} className={`px-3 py-2 text-sm font-medium  rounded-md  ${sources.id === source.id ? 'text-blue-700 bg-blue-100' : 'text-gray-500 hover:text-gray-700'}`}>{source.name}</button>
          )}
        </nav>
      </div>
      {headlines?.length > 0 &&
      <div className="mt-4">
        <h2 className="font-bold">Headlines</h2>
        <ul className="grid grid-cols-2 mt-4 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {headlines.map(news =>
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
    </div>
  )
}

export default News
