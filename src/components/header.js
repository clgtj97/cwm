
import PropTypes from "prop-types"
import React from "react"



const Header = ({ siteTitle }) => (
  <header
  id="inicioMainPage"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth:`960px` , 
        padding: `1.45rem 1.0875rem`,
        height: `4rem`,
      }}
    >
      <div id="imgInicio"></div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
