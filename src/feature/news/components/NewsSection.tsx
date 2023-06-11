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
            <li key={news.title}>
              <a href={news.url} target="_blank" className="flex flex-col items-start h-full rounded shadow-md hover:shadow-lg" rel="noreferrer">
                <div className="relative w-full">
                  <img
                    src={news.urlToImage}
                    alt=""
                    className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl p-2">
                  <div className="relative group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {news.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{news.description}</p>
                  </div>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
      }
    </>
  )
}

export default NewsSection
