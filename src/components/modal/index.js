import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const zIndexes = {
  backdrop: 20,
  overlay: 30
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this._mountElem = document.createElement('div')
    this._contentElem = null
  }

  componentDidMount() {
    document.body.appendChild(this._mountElem)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.body.removeChild(this._mountElem)
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = evt => {
    const { open, onClose, closeOnEscape } = this.props
    const escPressed = evt.which === 27
    if (open && closeOnEscape && escPressed) {
      evt.preventDefault()
      onClose()
    }
  }

  handleMouseDown = evt => {
    const { open, onClose, closeOnBackdropClick } = this.props
    const clickedOnBackdrop =
      this._contentElem && !this._contentElem.contains(evt.target)
    if (open && closeOnBackdropClick && clickedOnBackdrop) {
      onClose()
    }
  }

  render() {
    const { children, open } = this.props
    let content = null

    if (open) {
      content = (
        <Modal.Backdrop onMouseDown={this.handleMouseDown}>
          <Modal.Element ref={el => (this._contentElem = el)}>
            {children}
          </Modal.Element>
        </Modal.Backdrop>
      )
      return ReactDOM.createPortal(content, this._mountElem)
    }

    return content
  }
}

Modal.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexes.backdrop};
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

Modal.Element = styled.div`
  flex: none;
  z-index: ${zIndexes.overlay};
`

Modal.propTypes = {
  closeOnBackdropClick: PropTypes.bool.isRequired,
  closeOnEscape: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

Modal.defaultProps = {
  closeOnBackdropClick: true,
  closeOnEscape: true,
  open: false
}

export default Modal
