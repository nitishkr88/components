// material-ui ClickAwayListener
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EventListener from 'react-event-listener'
import ownerDocument from '../../_utils/ownerDocument'

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 */
class ClickAwayListener extends React.Component {
  _node = null
  _mounted = null

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this)
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  handleClickAway = event => {
    if (event.defaultPrevented || !this._mounted || !this._node) {
      return
    }

    const doc = ownerDocument(this._node)
    if (
      doc.documentElement &&
      doc.documentElement.contains(event.target) &&
      !this._node.contains(event.target)
    ) {
      this.props.onClickAway(event)
    }
  }

  render() {
    const {
      children,
      mouseEvent,
      touchEvent,
      onClickAway,
      ...rest
    } = this.props
    const listenerProps = {}
    if (mouseEvent !== false) {
      listenerProps[mouseEvent] = this.handleClickAway
    }
    if (touchEvent !== false) {
      listenerProps[touchEvent] = this.handleClickAway
    }
    return (
      <EventListener target="document" {...listenerProps} {...rest}>
        {children}
      </EventListener>
    )
  }
}

ClickAwayListener.propTypes = {
  /** The wrapped element */
  children: PropTypes.element.isRequired,
  /** The mouse event to listen to. You can disable the listener by providing `false` */
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  /** Callback fired when a "click away" event is detected */
  onClickAway: PropTypes.func.isRequired,
  /** The touch event to listen to. You can disable the listener by providing `false` */
  touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false])
}

ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
}

export default ClickAwayListener
