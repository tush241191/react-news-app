import {render} from '@testing-library/react'
import useApi from 'src/hooks/useApi'
import {API_ROUTES, STATIC_NEWS_SOURCES} from 'src/utils/constants'

import NewsSection from '../components/NewsSection'

jest.mock('src/hooks/useApi')
const api = useApi as jest.Mock

describe('NewsSection', () => {
  test('should fetch headlines and call getRequest', () => {
    const mockGetRequest = jest.fn()

    api.mockReturnValue({
      loading: false,
      error: null,
      getRequest: mockGetRequest
    })

    render(<NewsSection source={STATIC_NEWS_SOURCES[0]} />)
    expect(mockGetRequest).toHaveBeenCalled()
    expect(mockGetRequest).toHaveBeenCalledWith(
      `${API_ROUTES.TOP_HEADLINES}?sources=${STATIC_NEWS_SOURCES[0].id}`
    )
  })
})
