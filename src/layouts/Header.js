import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
  return (
    <header className="w-full fixed z-10">
      <div className="flex justify-between m-8">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
