import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import getColors from '../../_utils/colors'
import { withTheme } from '../../hoc'

const componentName = 'spinner'

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`

const getColorProperties = props => {
  return getColors(props, componentName)
}

const StyledSpinner = styled.span`
  display: inline-block;
  border-top: 2px solid ${props => getColorProperties(props).color};
  border-right: 2px solid ${props => getColorProperties(props).color};
  border-bottom: 2px solid ${props => getColorProperties(props).color};
  border-left: 2px solid ${props => getColorProperties(props).highlight};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${rotate} 0.8s infinite linear;
`

const Spinner = props => {
  return <StyledSpinner {...props} />
}

Spinner.propTypes = {
  /** Size of the spinner, expected as pixels */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Spinner.defaultProps = {
  size: 28
}

export default withTheme(Spinner)
