import {ReactNode} from 'react'

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({children}: BaseLayoutProps) => {

  return (
    <div className="relative w-full h-full min-h-full bg-white">
      <main>
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}

export default BaseLayout
