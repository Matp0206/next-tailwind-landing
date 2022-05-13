import React from 'react'

export default function SectionComponent({
  children = <></>,
  _background = 'bg-light h-screen',
  ...props
}) {
  return (
    <div
      {...props}
      className={`w-full flex justify-center items-center ${_background}`}
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-28 lg:px-32 xl:px-52">
        {children}
      </div>
    </div>
  )
}
