import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PopperJs from 'popper.js'

import ClickAwayListener from '../_clickaway-listener'
import Portal from '../_portal'
import StyledPopover from './_styledPopover'

class Popover extends React.Component {
  state = {}
  componentDidUpdate(prevProps) {
    if (!this.props.open && prevProps.open !== this.props.open) {
      this.handleClose()
    }

    if (
      prevProps.isOpen !== this.props.isOpen ||
      prevProps.anchorEl !== this.props.anchorEl ||
      prevProps.placement !== this.props.placement
    ) {
      this.handleOpen()
    }
  }

  componentWillUnmount() {
    this.handleClose()
  }

  handleOpen = () => {
    const { anchorEl, isOpen, placement } = this.props
    const popperNode = ReactDOM.findDOMNode(this)

    if (!popperNode || !anchorEl || !isOpen) {
      return
    }

    if (this.popper) {
      this.popper.destroy()
      this.popper = null
    }

    this.popper = new PopperJs(anchorEl, popperNode, {
      placement,
      onCreate: this.handlePopperUpdate,
      onUpdate: this.handlePopperUpdate
    })
  }

  handlePopperUpdate = data => {
    if (data.placement !== this.state.placement) {
      this.setState({
        placement: data.placement
      })
    }
  }

  handleClose = () => {
    if (!this.popper) {
      return
    }

    this.popper.destroy()
    this.popper = null
  }

  handleClickAway = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const {
      anchorEl,
      children,
      container,
      disablePortal,
      isOpen,
      placement: placementProps
    } = this.props
    const { placement } = this.state

    if (!isOpen) {
      return null
    }

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Portal disablePortal={disablePortal} container={container}>
          <StyledPopover>{children}</StyledPopover>
        </Portal>
      </ClickAwayListener>
    )
  }
}

Popover.propTypes = {
  /**
   * This is the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: PropTypes.object,
  /**
   * The content of the component.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  /** The parent container which will have the portal children appended to it. */
  container: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func
  ]),
  /**
   * Popover placement.
   */
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top'
  ])
}

Popover.defaultProps = {
  placement: 'bottom'
}

export default Popover
