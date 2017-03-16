import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

MainLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default MainLayout
