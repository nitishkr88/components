import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import placeholder from './placeholder.png'
import notFoundPlaceholder from './notFound.png'
import { withIntersectionObserver } from '../../hoc'

const ProgressiveImage = props => {
  let Component = props.lazy ? withIntersectionObserver(Img) : Img
  return <Component {...props} />
}

class Img extends React.Component {
  state = {
    ready: false,
    error: false
  }
  _mounted = false
  _triggered = false

  componentDidMount() {
    const { lazy } = this.props
    this._mounted = true
    if (!lazy) {
      this.createBuffer()
    }
  }

  componentWillReceiveProps({ intersecting }) {
    if (intersecting && !this._triggered) {
      this._triggered = true
      this.createBuffer()
    }
  }

  componentWillUnmount() {
    this._mounted = false
  }

  setReadyState = () => this._mounted && this.setState(prevState => ({...prevState, ready: true, error: false}))

  setErrorState = () => this._mounted && this.setState(prevState => ({...prevState, ready: false, error: true}))

  createBuffer = () => {
    const buffer = new Image()
    buffer.onload = this.setReadyState
    buffer.onerror = this.setErrorState
    buffer.src = this.props.src
  }

  render() {
    const { placeholder, blur, width, height } = this.props
    const { ready, error } = this.state
    const size = {width, height}

    const placeholderImage = error ? notFoundPlaceholder : placeholder

    return (
      <>
        {ready ? <Img.Element {...this.props} /> : null}
        <Img.Placeholder src={placeholderImage} hide={ready} blur={blur} {...size} />
      </>
    )
  }
}

Img.Element = styled.img`
  user-select: none;
  pointer-events: none;
  position: absolute;
`

Img.Placeholder = styled.img`
  user-select: none;
  pointer-events: none;
  opacity: ${props => (props.hide ? 0 : 1)};
  transition: opacity 2s ease-in-out;
  filter: ${props => props.blur ? '8px' : null};
`

ProgressiveImage.propTypes = {
  /** Image URL */
  src: PropTypes.string.isRequired,
  /** Placeholder to load till the image loads */
  placeholder: PropTypes.string,
  /** To render in case image not found */
  notFoundPlaceholder: PropTypes.string,
  /** Alt info */
  alt: PropTypes.string,
  /** Load the image only when in viewport */
  lazy: PropTypes.bool,
  /** Have a blur effect in case of thumbnail preview */
  blur: PropTypes.bool
}

ProgressiveImage.defaultProps = {
  src: null,
  placeholder: placeholder,
  notFoundPlaceholder: notFoundPlaceholder,
  alt: null,
  lazy: true,
  blur: false
}

export default ProgressiveImage
