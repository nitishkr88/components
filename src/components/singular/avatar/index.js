import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import spaces from '../../../parameters/spaces'
import Image from '../image'

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

const Avatar = props => {
  if (props.name && props.image) {
    return (
      <Container>
        <Element {...props}>
          <Image src={props.image} />
        </Element>
        {props.showName && <span>{props.name}</span>}
      </Container>
    )
  } else if (props.name && !props.image) {
    return (
      <Container>
        <Element {...props}>{getInitialsFromName(props.name)}</Element>
        {props.showName && <span>{props.name}</span>}
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
  border: #D4D5D6;
  background-color: #D4D5D6;

  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  margin-right: ${props => (props.name ? spaces.small : null)};

  img {
    height: 100%;
  }
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

export default Avatar
