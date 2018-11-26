import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import getColors from '../../_utils/colors'
import { withTheme } from '../../hoc'
import spaces from '../../parameters/spaces'
import fonts from '../../parameters/fonts'

const componentName = 'tooltip'

const getColorProperties = props => {
  return getColors(props, componentName)
}

const tooltipStyles = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: ${spaces.xsmall};
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: ${spaces.xsmall};
  `,
  left: css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: ${spaces.xsmall};
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${spaces.xsmall};
  `
}

const arrowStyles = color => ({
  top: css`
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-top-width: 6px;
    border-bottom-width: 0;
    border-top-color: ${color};
  `,
  bottom: css`
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-bottom-width: 6px;
    border-top-width: 0;
    border-bottom-color: ${color};
  `,
  left: css`
    left: 100%;
    top: 50%;
    margin-top: -5px;
    border-left-width: 6px;
    border-right-width: 0;
    border-left-color: ${color};
  `,
  right: css`
    right: 100%;
    top: 50%;
    margin-top: -5px;
    border-right-width: 6px;
    border-left-width: 0;
    border-right-color: ${color};
  `
})

const StyledTooltip = styled.div`
  position: absolute;
  background: ${props => getColorProperties(props).background};
  color: ${props => getColorProperties(props).text};
  border-radius: 3px;
  width: max-content;
  text-align: center;
  padding: ${spaces.xsmall};
  line-height: normal;
  font-size: ${fonts.size.medium};
  pointer-events: none;
  opacity: ${props => (props.alwaysVisible ? 1 : 0)};
  ${props => tooltipStyles[props.position]};

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 5.5px solid transparent;
    ${props =>
      arrowStyles(getColorProperties(props).background)[props.position]};
  }
`

const Container = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    ${StyledTooltip} {
      opacity: 1;
    }
  }
`

const Tooltip = props => {
  return (
    <Container>
      <StyledTooltip {...props}>{props.content}</StyledTooltip>
      {props.children}
    </Container>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  alwaysVisible: PropTypes.bool
}

Tooltip.defaultProps = {
  content: null,
  position: 'top',
  alwaysVisible: false
}

export default withTheme(Tooltip)
