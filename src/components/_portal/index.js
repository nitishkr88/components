import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const getCreatePortal = () => ReactDOM.createPortal

function getParentElement(container) {
  return typeof container === 'function' ? container() : container
}

class Portal extends React.Component {
  node = document.createElement('div')
  componentDidMount() {
    const parent = getParentElement(this.props.container)
    parent.appendChild(this.node)
  }

  componentWillUnmount() {
    if (!this.node || !this.portal) return
    this.removePortal()
  }

  removePortal = () => {
    const parent = getParentElement(this.props.container)
    parent.removeChild(this.node)
  }

  portalRef = ref => {
    this.portal = ref
  }

  render() {
    const createPortal = getCreatePortal()
    const portal = createPortal(this.props.children, this.node)
    this.portalRef(portal)
    return portal
  }
}

Portal.propTypes = {
  /** children to be rendered inside the container */
  children: PropTypes.node.isRequired,
  /** a function that returns the parent container which
   * will have the portal children appended to it
   */
  /** The parent container which will have the portal children appended to it. */
  container: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func
  ])
}

Portal.defaultProps = {
  container: () => document.body
}

export default Portal
