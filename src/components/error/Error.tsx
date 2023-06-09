import React from 'react'

interface ErrorProps {
  message?: string;
}
const Error = ({message = 'Something went wrong!'}: ErrorProps) => {
  return (
    <div className="h-full min-h-[200px] flex items-center justify-center">
      <div className="flex items-center justify-center w-full h-40 max-w-lg p-4 font-bold text-center text-gray-800 bg-gray-200 shadow-md">{message}</div>
    </div>
  )
}

export default Error
