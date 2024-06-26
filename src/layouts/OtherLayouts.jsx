import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OtherLayouts = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default OtherLayouts