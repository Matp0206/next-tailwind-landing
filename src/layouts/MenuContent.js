import { Fade } from '@material-ui/core'
import { SUPPORT_EMAIL } from 'global'
import React from 'react'
import MenuContentItem from './MenuContentItem'

export default function MenuContent({ open = false, onClick = () => {} }) {
  return (
    <div className="z-auto">
      <Fade in={Boolean(open)}>
        <div className="fixed top-0 left-0 h-screen w-screen bg-white flex flex-col justify-between items-end p-14">
          <div>&nbsp;</div>
          <div className="flex flex-col items-end">
            <MenuContentItem
              open={Boolean(open)}
              delay={100}
              label="About Us"
              to="/#about-us"
              onClick={onClick}
            />
            <MenuContentItem
              open={Boolean(open)}
              delay={200}
              label="Our Investment thematic"
              to="/#investment"
              onClick={onClick}
            />
            <MenuContentItem
              open={Boolean(open)}
              delay={300}
              label="Ideas"
              to="/#ideas"
              onClick={onClick}
            />
            <MenuContentItem
              open={Boolean(open)}
              delay={400}
              label="Contacts"
              to="/#contacts"
              onClick={onClick}
            />
          </div>

          <div className="text-xl">{SUPPORT_EMAIL}</div>
        </div>
      </Fade>
    </div>
  )
}
