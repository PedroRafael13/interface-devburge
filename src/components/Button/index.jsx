import { ContainerButton } from "./style"
import PropTypes from "prop-types"
import React from "react"

export function Button({ children }) {
  return (
    <ContainerButton>
      {children}
    </ContainerButton>
  )
}

Button.propTypes = {
  children: PropTypes.string
}