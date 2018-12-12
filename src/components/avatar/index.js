import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import spaces from '../../parameters/spaces'
import Image from '../image'

import getColors from '../../_utils/colors'
import { withTheme } from '../../hoc'

const componentName = 'avatar'

const sizes = {
  small: '24px',
  medium: '48px',
  large: '72px'
}

const getInitialsFromName = name => {
  let initials = name.match(/\b\w/g) || []
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  return initials
}

const getColorProperties = props => {
  const color = getColors(props, componentName)
  return {
    color: color.text,
    backgroundColor: color.background,
    border: '1px solid ' + color.border
  }
}

const Avatar = props => {
  if (props.name && props.image) {
    return (
      <Container>
        <Element {...props}>
          <Image src={props.image} />
        </Element>
        {props.showName && <Text {...props}>{props.name}</Text>}
      </Container>
    )
  } else if (props.name && !props.image) {
    return (
      <Container>
        <Element {...props}>{getInitialsFromName(props.name)}</Element>
        {props.showName && <Text {...props}>{props.name}</Text>}
      </Container>
    )
  } else {
    return (
      <Element {...props}>
        <Image src={props.image} />
      </Element>
    )
  }
}

const Container = styled.div`
  display: -webkit-box;
  align-items: center;
  justify-content: start;
`

const Element = styled.div`
  width: ${props => sizes[props.size]};
  height: ${props => sizes[props.size]};

  color: ${props => getColorProperties(props).color};
  background-color: ${props => getColorProperties(props).backgroundColor};
  border: ${props => getColorProperties(props).border};

  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  margin-right: ${props => (props.name ? spaces.xsmall : null)};

  img {
    height: 100%;
    width: 100%;
  }
`

const Text = styled.span`
  color: ${props => getColorProperties(props).color};
`

Avatar.propTypes = {
  /** Size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Image URL */
  image: PropTypes.string,
  /** User's name */
  name: PropTypes.string,
  /** Show or hide name */
  showName: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'medium',
  image: null,
  name: null,
  showName: true
}

export default withTheme(Avatar)
