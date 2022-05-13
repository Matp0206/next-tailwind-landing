import SectionComponent from 'components/SectionComponent'
import React, { useEffect, useState } from 'react'

const text =
  'Founded in 2021, Impactful Capital helps entrepreneurs launch projects that have a positive impact on people and planet.'

  export default function AboutSection() {
  const [unitStamp, setUnitStamp] = useState(150)
  useEffect(() => {
    setUnitStamp(Math.floor(3000 / text?.split(' ').length / 50) * 50)
  }, [])
  return (
    <>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div className="flex flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {(text.split(' ') ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              className="p-6 text-white delay-200"
              data-aos="fade-zoom-in"
              data-aos-duration={3000}
              data-aos-delay={wordIndex * unitStamp}
            >
              {wordContent}
            </div>
          ))}
        </div>
      </SectionComponent>
    </>
  )
}
