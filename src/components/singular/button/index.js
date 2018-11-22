import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getColors from '../../../_utils/colors'

const componentName = 'button'

const properties = [
  'text',
  'icon',
  'background',
  'backgroundHover',
  'backgroundFocus',
  'border',
  'borderHover',
  'borderFocus',
  'borderActive'
]

const getColorProperties = props => {
  const colors = getColors(props, componentName)[props.view]
  return properties.reduce((acc, val) => {
    acc[val] = colors[val]
    return acc
  }, {})
}

const Button = props => {}

Button.Element = styled.button``

Button.propTypes = {
  /** The visual cue */
  view: PropTypes.oneOf(['primary', 'secondary', 'link']),
  /** Icon to be rendered. Aligned left */
  icon: PropTypes.string,
  /** Icon to be rendered. Aligned Right */
  rightIcon: PropTypes.string,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** URL to naviagte to */
  href: PropTypes.string,
  /** Where to open the navigated document */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
}

Button.defaultProps = {
  view: 'primary',
  icon: null,
  rightIcon: null,
  disabled: false
}

export default Button
