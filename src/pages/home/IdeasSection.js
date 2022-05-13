import { IconButton } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import img0001 from 'assets/images/0001.jpg'
import img0002 from 'assets/images/0002.jpg'
import img0003 from 'assets/images/0003.jpg'
import img0004 from 'assets/images/0004.jpg'
import NewsComponent from 'components/NewsComponent'
import SectionComponent from 'components/SectionComponent'
import React from 'react'

const textList = [
  {
    img: img0001,
    author: 'By Wendy Wei',
    title: "China's successful elimination of malaria, and its global impact",
    content: 'Senior Program Officer, Malaria',
  },
  {
    img: img0003,
    author: 'By Anita Zaidi',
    title:
      'Geographically distributed manufacturing capacity is needed for improved global health security',
    content:
      'President, Gender Equality and Director, Vaccine Development and Surveillance, and Director, EDD, Bill Melinda Gates Foundation',
  },
  {
    img: img0004,
    author: 'By Cheikh Oumar Seydi',
    title:
      'As COVID-19 cases surge, African institutions lead response efforts',
    content: 'Director, Africa, Bill & Melinda Gates Foundation',
  },
  {
    img: img0002,
    author: 'By Mark Suzman',
    title: 'Work in progress: An update on our DEII journey',
    content: 'Chif Executive Officer, Bill & MElinda Gates Foundation',
  },
]

export default function IdeasSection() {
  return (
    <>
      <SectionComponent id="ideas" _background="bg-light min-h-screen ">
        <div className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          <div className="m-auto mb-8 text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-extrabold text-center text-title">
            Heaifng : Our Ideas
          </div>
        </div>
      </SectionComponent>
      <SectionComponent _background="bg-white min-h-screen pt-40">
        <div className="flex justify-between">
          <div className="text-4xl text-black font-bold">Latest updates</div>
          <div className="p-5">
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-10 mb-36">
          {textList.map((topic, topicIndex) => {
            return (
              <div
                key={topicIndex}
                className="pt-40"
                data-aos="fade-zoom-in"
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <NewsComponent
                  img={topic?.img ?? ''}
                  author={topic?.author ?? ''}
                  title={topic?.title ?? ''}
                  content={topic?.content ?? ''}
                />
              </div>
            )
          })}
        </div>
      </SectionComponent>
    </>
  )
}
