import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh_-_55px)]">
      <div className="relative inline-block w-20 h-20">
        <div className="absolute w-full h-full transition-opacity border-4 rounded-full border-blue-500 animate-ripple [animation-delay:100ms]" />
        <div className="absolute w-full h-full transition-opacity border-4 rounded-full border-blue-500 animate-ripple [animation-delay:500ms]" />
      </div>
    </div>
  )
}

export default Loading
