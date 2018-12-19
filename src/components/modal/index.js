import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Portal from './_modalPortal'

const isReact16 = ReactDOM.createPortal !== undefined

const getCreatePortal = () =>
  isReact16
    ? ReactDOM.createPortal
    : ReactDOM.unstable_renderSubtreeIntoContainer

function getParentElement(parentSelector) {
  return parentSelector()
}

class Modal extends React.Component {
  componentDidMount() {
    if (!isReact16) {
      this.node = document.createElement('div')
    }
    const parent = getParentElement(this.props.parentSelector)
    parent.appendChild(this.node)

    !isReact16 && this.renderPortal(this.props)
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props

    // Stop unnecessary renders if modal is already closed
    if (!prevProps.isOpen && !isOpen) return

    !isReact16 && this.renderPortal(this.props)
  }

  componentWillUnmount() {
    if (!this.node || !this.portal) return
    this.removePortal()
  }

  removePortal = () => {
    !isReact16 && ReactDOM.unmountComponentAtNode(this.node)
    const parent = getParentElement(this.props.parentSelector)
    parent.removeChild(this.node)
  }

  portalRef = ref => {
    this.portal = ref
  }

  renderPortal = props => {
    const createPortal = getCreatePortal()
    const portal = createPortal(this, <Portal {...props} />, this.node)
    this.portalRef(portal)
  }

  render() {
    if (!isReact16) return

    if (!this.node && isReact16) {
      this.node = document.createElement('div')
    }

    const createPortal = getCreatePortal()
    return createPortal(<Portal {...this.props} />, this.node)
  }
}


Modal.propTypes = {
  closeOnBackdropClick: PropTypes.bool.isRequired,
  closeOnEscape: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  parentSelector: PropTypes.func,
  bodyOpenClassName: PropTypes.string
}

Modal.defaultProps = {
  closeOnBackdropClick: true,
  closeOnEscape: true,
  isOpen: false,
  parentSelector: () => document.body,
  bodyOpenClassName: 'Modal__Body--open'
}

export default Modal
