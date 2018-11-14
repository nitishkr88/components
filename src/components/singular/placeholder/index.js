import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

class Placeholder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: this._delayIfNeeded()
    }
  }
  placeholders = {
    rect: Placeholder.Rect,
    text: Placeholder.Text,
    round: Placeholder.Round
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.firstLaunchOnly && this.state.ready && !nextProps.ready) {
      this.setNotReady()
    } else if (nextProps.ready) {
      this.setReady()
    }
  }
  componentWillUnmount() {
    clearTimeout(this.initTimeout)
    clearTimeout(this.timeout)
  }
  _delayIfNeeded = () => {
    const { ready, delay } = this.props
    if (ready) return ready
    if (delay && delay > 0) {
      this.initTimeout = setTimeout(
        () => this.setState({ ready: false }),
        delay
      )
      return true
    }
    return ready
  }
  setReady = () => {
    clearTimeout(this.initTimeout)
    clearTimeout(this.timeout)
    if (!this.state.ready) this.setState({ ready: true })
  }
  setNotReady = () => {
    const { delay } = this.props
    if (delay && delay > 0) {
      this.timeout = setTimeout(() => this.setState({ ready: false }), delay)
    } else {
      this.setState({ ready: false })
    }
  }
  getPlaceholder = () => {
    const {
      type,
      ready,
      children,
      delay,
      firstLaunchOnly,
      customPlaceholder,
      ...rest
    } = this.props
    if (customPlaceholder && React.isValidElement(customPlaceholder)) {
      return React.cloneElement(customPlaceholder, {
        ...customPlaceholder.props,
        ...rest
      })
    } else if (customPlaceholder) {
      return customPlaceholder
    }
    const PH = this.placeholders[type]
    return <PH {...rest} />
  }
  render() {
    return this.state.ready ? this.props.children : this.getPlaceholder()
  }
}

Placeholder.Element = styled.div``

const pulse = keyframes`
  0% {
    opacity: .6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .6;
  }
`

const animation = css`
  animation: ${pulse} 1.5s infinite;
`

Placeholder.Rect = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 8px;
  background-color: ${props => (props.color ? props.color : '#CDCDCD')};
  ${animation};
`

Placeholder.Text = styled.div`
  width: 100%;
  height: 1em;
  margin-top: ${props => (props.lineSpacing ? props.lineSpacing : '0.7em')};
  background-color: ${props => (props.color ? props.color : '#CDCDCD')};
  ${animation};
`

Placeholder.Round = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 500rem;
  background-color: ${props => (props.color ? props.color : '#CDCDCD')};
  ${animation};
`

Placeholder.propTypes = {
  color: PropTypes.string,
  syle: PropTypes.object,
  type: PropTypes.oneOf(['rect', 'text', 'round']),
  ready: PropTypes.bool.isRequired,
  delay: PropTypes.number,
  firstLaunchOnly: PropTypes.bool,
  customPlaceholder: PropTypes.node
}

Placeholder.defaultProps = {
  color: '#CDCDCD',
  type: 'text',
  delay: 0,
  firstLaunchOnly: false
}

export default Placeholder
