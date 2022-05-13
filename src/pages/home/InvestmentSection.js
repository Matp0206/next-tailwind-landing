import SectionComponent from 'components/SectionComponent'
import React from 'react'

const text =
  'We are a boutique advisory and investment firm focused on helping entrepreneurs solve some of the intractable challenges facing our planet. Our investment thematic includes clean air, clean water, climate change, waste and biodiversity loss.'

export default function InvestmentSection() {
  return (
    <>
      <SectionComponent id="investment" _background="min-h-screen ">
        <div className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          <div className="m-auto mb-8 text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-extrabold text-center text-title">
            Our Investment Themes
          </div>
        </div>
      </SectionComponent>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div
          className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {(text.split(' ') ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              className="p-2 lg:p-4 xl:p-4 text-white delay-200"
            >
              {wordContent}
            </div>
          ))}
        </div>
      </SectionComponent>
    </>
  )
}
