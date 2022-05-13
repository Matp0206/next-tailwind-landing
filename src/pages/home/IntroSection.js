import SectionComponent from 'components/SectionComponent'
import React from 'react'

export default function IntroSection() {
  return (
    <SectionComponent>
      <div
        className="mb-8 text-8xl font-extrabold"
        data-aos="fade-up"
        data-aos-duration={3000}
        // data-aos-delay={isAnimate && _delay}
      >
        Investing for Impact
      </div>
      <div
        className="text-2xl delay-1000"
        data-aos="fade-up"
        data-aos-duration={3000}
        // data-aos-delay={isAnimate && _delay}
      >
        Advisory & investment firm dedicated to buildinga better planet.
      </div>
    </SectionComponent>
  )
}
