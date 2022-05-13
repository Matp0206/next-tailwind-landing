import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Container } from '@material-ui/core'

export default function Layout({ children = <></>, fullWidth = false }) {
  return (
    <div>
      <Header />
      <main>
        {Boolean(fullWidth) ? (
          <div id="page_container">{children}</div>
        ) : (
          <Container>
            <div className="z-0" id="page_container">
              {children}
            </div>
          </Container>
        )}
      </main>
      <Footer />
    </div>
  )
}
