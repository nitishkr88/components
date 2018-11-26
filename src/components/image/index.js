import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PlaceHolder from './placeholder.png'
import NotFound from './notFound.png'

class ProgressiveImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: PlaceHolder
    }
  }

  componentDidMount() {
    const { source } = this.props
    this._mounted = true

    const buffer = new Image()
    buffer.onload = () => this._mounted && this.setState({ source: buffer.src })
    buffer.onerror = () => this._mounted && this.setState({ source: NotFound })
    buffer.src = source
  }

  componentWillUnmount() {
    this._mounted = false
  }

  render() {
    return (
      <ProgressiveImage.Element
        {...this.props}
        src={this.state.source}
        alt={this.props.alt}
      />
    )
  }
}

ProgressiveImage.Element = styled.img`
  user-select: none;
  pointer-events: none;
`

ProgressiveImage.propTypes = {
  /** Image URL */
  source: PropTypes.string.isRequired,
  /** Alt info */
  alt: PropTypes.string
}

ProgressiveImage.defaultProps = {
  source: null,
  alt: null
}

export default ProgressiveImage
