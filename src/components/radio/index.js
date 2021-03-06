import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _noop from 'lodash/noop'

import fonts from '../../parameters/fonts'
import spaces from '../../parameters/spaces'
import { withTheme } from '../../hoc'
import getColors from '../../_utils/colors'
import baseColors from '../../parameters/colors'

const componentName = 'checkbox'

const getColorProperties = props => {
  const colors = getColors(props, componentName)
  return {
    background: props.readOnly ? colors.backgroundDisabled : colors.background,
    backgroundSelected: colors.backgroundSelected,
    border: colors.border,
    borderSelected: colors.borderSelected,
    shadow: props.readOnly ? colors.shadowDisabled : colors.shadow
  }
}

const CheckMark = styled.span``
const Label = styled.span``

const StyledRadioOption = styled.label`
  position: relative;
  cursor: pointer;
  margin-bottom: 0;
  font-weight: ${fonts.weight.normal};
  padding-left: ${spaces.medium};
  user-select: none;
  vertical-align: middle;
  pointer-events: ${props => (props.readOnly ? 'none' : null)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  ${Label} {
    opacity: ${props => (props.readOnly ? 0.5 : null)};
  }

  ${CheckMark} {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
    background-color: ${props => getColorProperties(props).background};
    border: 1px solid ${props => getColorProperties(props).border};
    box-shadow: inset 0 1px 2px 0 ${props => getColorProperties(props).shadow};
    border-radius: 50%;
  }

  &:hover input ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${props => getColorProperties(props).shadow};
  }

  input:checked ~ ${CheckMark} {
    background-color: ${props => getColorProperties(props).backgroundSelected};
    border: 1px solid ${props => getColorProperties(props).borderSelected};
  }

  input:focus ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${props => getColorProperties(props).shadow};
  }

  ${CheckMark}::after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ ${CheckMark}::after {
    display: block;
  }

  ${CheckMark}::after {
    width: 6px;
    height: 6px;
    background-color: ${baseColors.white};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`

const justifyContent = {
  horizontal: `margin-right: ${spaces.medium}`,
  vertical: `margin-bottom: ${spaces.small}`
}

const StyledGroup = styled.div`
  ${StyledRadioOption} {
    display: ${props =>
      props.align === 'horizontal' ? 'inline-block' : 'table'};
    ${props => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`

const Radio = props => (
  <StyledRadioOption readOnly={props.readOnly} theme={props.theme}>
    <input
      type="radio"
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      readOnly
    />
    <CheckMark />
    <Label>{props.children}</Label>
  </StyledRadioOption>
)

Radio.Group = props => (
  <StyledGroup {...props}>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        name: props.name,
        checked: props.selected === child.props.value,
        readOnly: props.readOnly || child.props.readOnly,
        onChange: evt => {
          evt.stopPropagation()
          props.onChange(evt)
        }
      })
    })}
  </StyledGroup>
)

Radio.Group.defaultProps = {
  align: 'vertical',
  onChange: _noop
}

Radio.propTypes = {
  /** Layout Direction */
  align: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Name of Radio (should be unique) */
  name: PropTypes.string.isRequired,
  /** value of Checkbox */
  value: PropTypes.string.isRequired,
  /** Disable/Enable all options in the group */
  readOnly: PropTypes.bool,
  /** Current selected options */
  selected: PropTypes.arrayOf(PropTypes.string),
  /** Callback when an option is selected by user */
  onChange: PropTypes.func
}

Radio.defaultProps = {
  align: 'vertical',
  onChange: _noop
}

export default withTheme(Radio)
