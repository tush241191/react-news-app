import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {requestGet} from 'src/apiClient/apiClient'
import {RootState} from 'src/store/store'

const News = () => {
  const apiKey = useSelector((state: RootState) => state.auth.user?.apiKey)

  useEffect(() => {
    if(apiKey) {
      const url = 'top-headlines?sources=bbc-news'
      requestGet(url, apiKey).then(response => {
        console.log(response)
      })
    }
  }, [apiKey])
  return (
    <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-base font-semibold leading-6 text-gray-900">News</h2>
    </div>
  )
}

export default News
