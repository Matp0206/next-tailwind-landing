import { Button, TextField } from '@material-ui/core'
import SectionComponent from 'components/SectionComponent'
import { SUPPORT_EMAIL } from 'global'
import React from 'react'

export default function ContactSection() {
  return (
    <SectionComponent id="contacts">
      <div className="lg:grid xl:grid grid-rows-1 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-40">
        <div className="col-span-2 my-auto">
          <div className="mb-8 text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-black font-extrabold">
            Let's <font className="text-title">get in</font> touch
          </div>
          <div className="grid grid-cols-2 gap-12 pt-24">
            <TextField label="What is your name?" variant="standard" />
            <TextField label="Your email" variant="standard" />
          </div>
          <div className="pt-12">
            <TextField
              label="How can we help you?"
              variant="standard"
              className="w-full"
            />
          </div>
          <div className="pt-12 pb-12">
            <Button variant="outlined" className="w-40 h-12">
              Send
            </Button>
          </div>
        </div>
        <div className="my-auto">
          <div className="mb-8 text-3xl text-black break-all">{SUPPORT_EMAIL}</div>
          <div className="mb-8 text-xl text-default">
            Have a project in mind ? Want advice on your start up? Looking to
            invest in a start up? We are excited to talk to you.
          </div>
        </div>
      </div>
    </SectionComponent>
  )
}
