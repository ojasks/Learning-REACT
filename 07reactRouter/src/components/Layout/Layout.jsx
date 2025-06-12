// import React from 'react'
// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'
// import { Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <>
//     <Header/>
//     <Outlet />
//     <Footer />
//     </>
//   )
// }

// export default Layout

import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
