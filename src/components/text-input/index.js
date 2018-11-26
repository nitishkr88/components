import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _noop from 'lodash/noop'

import fonts from '../../parameters/fonts'
import getColors from '../../_utils/colors'
import spaces from '../../parameters/spaces'
import { withTheme } from '../../hoc'
import uniqueId from '../../_utils/uniqueId'

const componentName = 'input'

const config = {
  default: {
    background: 'background',
    border: 'border',
    borderHover: 'borderHover',
    borderFocus: 'borderFocus',
    label: 'label',
    placeholder: 'placeholder'
  },
  readOnly: {
    background: 'backgroundReadOnly',
    border: 'border',
    borderHover: 'border',
    borderFocus: 'border',
    label: 'labelReadOnly',
    placeholder: 'placeholderReadOnly'
  },
  errored: {
    background: 'background',
    border: 'borderError',
    borderHover: 'borderError',
    borderFocus: 'borderError',
    label: 'label',
    placeholder: 'placeholder'
  }
}

const colorByState = (props, colors) => {
  let state = 'default'
  if (props.readOnly) state = 'readOnly'
  else if (props.error) state = 'errored'

  const colorProperties = config[state]
  let newColors = {}
  for (const key in colorProperties) {
    if (colorProperties.hasOwnProperty(key)) {
      let value = colorProperties[key]
      newColors[key] = colors[value]
    }
  }

  return newColors
}

const getColorProperties = props => {
  const colors = getColors(props, componentName)
  const colorProperties = colorByState(props, colors)
  return { ...colorProperties, icon: colors.icon, text: colors.text }
}

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  background: ${props => getColorProperties(props).background};

  border: 1px solid;
  border-color: ${props => getColorProperties(props).border};
  border-radius: 3px;

  font-size: ${fonts.size.medium};
  color: ${props => getColorProperties(props).text};

  padding: ${spaces.xsmall};
  pointer-events: ${props => (props.readOnly ? 'none' : 'auto')};

  &:hover {
    border-color: ${props => getColorProperties(props).borderHover};
  }
  &:focus {
    border-color: ${props => getColorProperties(props).borderFocus};
    box-shadow: 0px 0px 0 1px ${props => getColorProperties(props).borderFocus};
    outline: none;
  }
  &::placeholder {
    color: ${props => getColorProperties(props).placeholder};
  }
`

const StyledLabel = styled.label`
  color: ${props => getColorProperties(props).label};
  pointer-events: ${props => (props.readOnly ? 'none' : 'auto')};
`

const StyledError = styled.span`
  color: ${props => getColorProperties(props).border};
  font-size: ${fonts.size.small};
`

const Wrapper = styled.div`
  height: 60px;
`

const TextInput = ({ defaultValue, type, ...props }) => {
  const id = uniqueId()
  return (
    <Wrapper>
      {props.label && (
        <StyledLabel htmlFor={id} {...props}>
          {props.label}
        </StyledLabel>
      )}
      <StyledInput id={id} type={type} defaultValue={defaultValue} {...props} />
      {props.error && <StyledError {...props}>{props.error}</StyledError>}
    </Wrapper>
  )
}

TextInput.propTypes = {
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass hasError to show error state */
  hasError: PropTypes.bool,
  /** Pass error string directly to show error state and message */
  error: PropTypes.string,
  /** onChange passed to the input */
  onChange: PropTypes.func,
  /** Text to display when the input is empty */
  placeholder: PropTypes.string,
  /** The default value for the field */
  defaultValue: PropTypes.string,
  /** The (HTML) type for the input. */
  type: PropTypes.string
}

TextInput.defaultProps = {
  readOnly: false,
  error: null,
  onChange: _noop,
  type: 'text'
}

export default withTheme(TextInput)
export { StyledInput }
