import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as classList from '../../_utils/classList'

const ESC_KEY = 27

class Portal extends React.Component {
  state = {}
  shouldClose = null

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    if (this.props.isOpen) this.open()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.open()
    } else if (!this.props.isOpen && prevProps.isOpen) {
      this.close()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  beforeOpen = () => {
    const { bodyOpenClassName } = this.props
    bodyOpenClassName && classList.add(document.body, bodyOpenClassName)
  }

  afterClose = () => {
    const { bodyOpenClassName } = this.props
    bodyOpenClassName && classList.remove(document.body, bodyOpenClassName)
  }

  open = () => {
    this.beforeOpen()
    this.setState({ isOpen: true })
  }

  close = () => this.setState({ isOpen: false }, this.afterClose)

  shouldBeClosed = () => !this.state.isOpen

  handleKeyDown = evt => {
    const { closeOnEscape, onClose } = this.props
    if (closeOnEscape && evt.keyCode === ESC_KEY) {
      evt.stopPropagation()
      onClose && onClose()
    }
  }

  handleMouseDown = evt => {
    const { isOpen, onClose, closeOnBackdropClick } = this.props
    const clickedOnBackdrop =
      this._contentElem && !this._contentElem.contains(evt.target)
    if (isOpen && closeOnBackdropClick && clickedOnBackdrop) {
      onClose && onClose()
    }
  }

  render() {
    return this.shouldBeClosed() ? null : (
      <Portal.Backdrop onMouseDown={this.handleMouseDown}>
        <Portal.Element ref={el => (this._contentElem = el)}>
          {this.props.children}
        </Portal.Element>
      </Portal.Backdrop>
    )
  }
}

Portal.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

Portal.Element = styled.div`
  flex: none;
`

export default Portal
