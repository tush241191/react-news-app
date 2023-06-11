import React, {useEffect, useRef} from 'react'
import Error from 'src/components/error/Error'
import Loading from 'src/components/loading/Loading'
import useApi from 'src/hooks/useApi'
import {API_ROUTES} from 'src/utils/constants'

import {NewsApiResponse, NewsResponse, Source} from '../types'
import NewsItem from './NewsItem'

interface NewsSectionProps {
  source: Source;
}

const NewsSection = ({source}: NewsSectionProps) => {
  const {loading, error, getRequest} = useApi()
  const headlines = useRef<NewsResponse[]>([])

  useEffect(() => {
    fetchHeadlines()
  }, [source])

  const fetchHeadlines = async () => {
    try {
      const url = `${API_ROUTES.TOP_HEADLINES}?sources=${source.id}`
      const response = await getRequest<NewsApiResponse>(url)
      if(response) {
        headlines.current = response.articles
        return response.articles
      }
    } catch (error) {}
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
        <h2 id="headline-title" data-testid="headline-title" className="font-bold">Headlines</h2>
        <ul data-testid="news" aria-label="news" aria-labelledby="news" className="grid grid-cols-2 mt-4 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {headlines.current.map(news =>
            <li aria-label="newsitems" key={news.title}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <NewsItem news={news} />
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
