import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import spaces from '../../../parameters/spaces'
import fonts from '../../../parameters/fonts'
import getColors from '../../../_utils/colors'
import Icon, { StyledIcon } from '../icon'
import { withTheme } from '../../../hoc'

const componentName = 'button'

const properties = [
  'text',
  'icon',
  'background',
  'backgroundActive',
  'backgroundHover',
  'backgroundFocus',
  'border',
  'borderActive',
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

const Button = props => {
  let content = []

  if (props.leftIcon) {
    content.push(<Icon key="left-icon" name={props.leftIcon} />)
  }

  content.push(<Button.Content key="content">{props.children}</Button.Content>)

  if (props.rightIcon) {
    content.push(<Icon key="right-icon" name={props.rightIcon} />)
  }

  return props.href ? (
    <Button.LinkElement as="a" {...props}>
      {content}
    </Button.LinkElement>
  ) : (
    <Button.Element {...props}>{content}</Button.Element>
  )
}

Button.Element = styled.button`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  margin-left: 0;
  margin-top: 0;

  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};

  background: ${props => getColorProperties(props).background};
  border: ${props => getColorProperties(props).border};
  border-radius: 3px;

  color: ${props => getColorProperties(props).text};

  padding: ${spaces.xsmall};

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled ? 'none' : null)};

  transition: border-color 0.25s, background 0.25s;

  ${StyledIcon} {
    color: ${props => getColorProperties(props).icon};
  }

  &:hover {
    background: ${props => getColorProperties(props).backgroundHover};
    border-color: ${props => getColorProperties(props).borderHover};
  }

  &:focus {
    background: ${props => getColorProperties(props).backgroundFocus};
    border-color: ${props => getColorProperties(props).borderFocus};
    outline: none;
  }

  &:active {
    background: ${props => getColorProperties(props).backgroundActive};
    border-color: ${props => getColorProperties(props).borderActive};
    outline: none;
  }
`

Button.Content = styled.span`
  display: inline-block;
  vertical-align: middle;
  /* margin-top: 2px; */
`

Button.LinkElement = styled(Button.Element)`
  display: table;
  text-decoration: none;

  ${Button.Content} {
    display: table-cell;
  }
  ${StyledIcon} {
    display: table-cell;
    vertical-align: middle;
    padding-right: ${props => (props.children ? spaces.xsmall : 0)};
  }
`

Button.propTypes = {
  /** The visual cue */
  view: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'link']),
  /** Icon to be rendered. Aligned left */
  leftIcon: PropTypes.string,
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
  leftIcon: null,
  rightIcon: null,
  disabled: false
}

export default withTheme(Button)
