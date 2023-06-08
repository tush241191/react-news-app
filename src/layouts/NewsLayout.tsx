import React, {ReactNode} from 'react'

import Header from './Header'

interface NewsLayoutProps {
  children: ReactNode;
}
const NewsLayout = ({children}: NewsLayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default NewsLayout
