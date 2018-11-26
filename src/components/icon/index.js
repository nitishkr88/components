import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getColors from '../../_utils/colors'
import { withTheme } from '../../hoc'

const componentName = 'icon'

const getColorProperties = props =>
  props.color || getColors(props, componentName).color

const StyledIcon = styled.i.attrs({ className: 'material-icons' })`
  width: auto;
  padding: 0;
  color: ${props => getColorProperties(props)};
  font-size: ${props => parseFloat(props.size)}px;
`

const Icon = props => <StyledIcon {...props}>{props.name}</StyledIcon>

Icon.propTypes = {
  /** Icon's size */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Icon's color */
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 16
}

export default withTheme(Icon)
export { StyledIcon }
