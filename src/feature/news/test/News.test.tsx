import {render, screen} from '@testing-library/react'

import NewsItem from '../components/NewsItem'
import {mockNews} from '../mock/News.mock'

describe('NewsItem', () => {
  it('renders the news item correctly', () => {
    render(<NewsItem news={mockNews} />)

    const newsImage = screen.getByAltText(mockNews.title)
    const newsTitle = screen.getByText(mockNews.title)
    const newsDescription = screen.getByText(mockNews.description)

    expect(newsImage).toBeInTheDocument()
    expect(newsImage).toHaveAttribute('src', mockNews.urlToImage)
    expect(newsTitle).toBeInTheDocument()
    expect(newsDescription).toBeInTheDocument()
  })
})
