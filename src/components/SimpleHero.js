import React from "react"

const SimpleHero = ({ children }) => {
  return (
    <React.Fragment>
      <header className="defaultHero">{children}</header>
    </React.Fragment>
  )
}

export default SimpleHero
