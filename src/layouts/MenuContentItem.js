import { Fade, Slide } from '@material-ui/core'
import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function MenuContentItem({
  open = false,
  label = '',
  to = '',
  delay = 1000,
  onClick = () => {},
}) {
  return (
    <Slide in={Boolean(open)} direction="down" timeout={{ enter: delay }}>
      <div className="m-3 overflow-hidden">
        <Fade in={Boolean(open)} timeout={{ enter: delay }}>
          <HashLink onClick={() => onClick(to)} to={to || '/'}>
            <div className="text-8xl font-bold">{label ?? ''}</div>
          </HashLink>
        </Fade>
      </div>
    </Slide>
  )
}
