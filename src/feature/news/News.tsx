import {useState} from 'react'
import {STATIC_NEWS_SOURCES} from 'src/utils/constants'

import NewsSection from './components/NewsSection'
import {Source} from './types'

const News = () => {
  const [source, setSource] = useState<Source>(STATIC_NEWS_SOURCES[0])
  return (
    <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <nav className="flex space-x-4" aria-label="Tabs">
          {STATIC_NEWS_SOURCES.map(item =>
            <button key={item.id} onClick={() => setSource(item)} className={`px-3 py-2 text-sm font-medium  rounded-md  ${source.id === item.id ? 'text-blue-700 bg-blue-100' : 'text-gray-500 hover:text-gray-700'}`}>{item.name}</button>
          )}
        </nav>
      </div>
      <NewsSection source={source} />
    </div>
  )
}

export default News
