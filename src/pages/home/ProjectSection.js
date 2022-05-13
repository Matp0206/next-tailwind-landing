import React from 'react'
import ProjectComponent from 'components/ProjectComponent'
import SectionComponent from 'components/SectionComponent'

const imgList = [
  {
    name: '',
    url: 'https://snp.agency/frassets/images/cusp-cover-retina.b1b772.jpg',
  },
  {
    name: '',
    url: 'https://snp.agency/frassets/images/walters_bg_x1.2334ca.jpg',
  },
]

const subList = [
  {
    name: 'CUOP',
    target: '',
  },
  {
    name: 'Walters Homes',
    target: '',
  },
  {
    name: 'WE+AR TRBL',
    target: '',
  },
  {
    name: 'Makespace',
    target: '',
  },
  {
    name: 'COIN.MOM',
    target: '',
  },
  {
    name: 'Advantics',
    target: '',
  },
  {
    name: 'Neebomonitor',
    target: '',
  },
  {
    name: 'Doslovno',
    target: '',
  },
]

export default function ProjectSection() {
  return (
    <div>
      <SectionComponent>
        <div className="mb-8 text-5xl sm:text-8xl md:text-10xl lg:text-11xl xl:text-12xl font-extrabold text-center text-title">
          Projects
        </div>
      </SectionComponent>
      <div className="relative">
        <div className="absolute right-5 top-16 text-side lg:text-xl xl:text-2xl">
          {subList.map((item, i) => {
            return <div key={i}>{item.name}</div>
          })}
        </div>
        {imgList.map((imgItem, index) => {
          return (
            <div key={index}>
              <SectionComponent>
                <ProjectComponent
                  imgClss={
                    'w-full transition duration-300 ease-in transform hover:scale-95 hover:cursor-pointer'
                  }
                  imgUrl={imgItem.url}
                />
              </SectionComponent>
              <div className="h-half bg-light"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
