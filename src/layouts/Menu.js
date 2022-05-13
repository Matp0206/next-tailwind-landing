import React, { useState } from 'react'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((s = false) => !Boolean(s))

  return (
    <div className="fixed right-0">
      <MenuButton open={Boolean(isOpen)} onClick={toggleOpen} />
      <MenuContent open={Boolean(isOpen)} onClick={toggleOpen} />
    </div>
  )
}
