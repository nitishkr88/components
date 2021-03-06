import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
require('intersection-observer')

const withIntersectionObserver = WrappedComponent => {
  class Lazy extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        intersecting: false
      }
      this._mounted = false
      this._wrapper = null
      this._options = props.options || {
        root: props.viewPortEl || null,
        rootMargin: '0px',
        threshold: 0.2
      }
    }

    handleObserverUpdate = entries => {
      const { isIntersecting } = entries.filter(
        entry => entry.target === this._wrapper
      )[0]
      this._mounted && this.setState({ intersecting: isIntersecting })
    }

    componentDidMount() {
      this._mounted = true
      this._observer = new IntersectionObserver(
        this.handleObserverUpdate,
        this._options
      )
      this._observer.observe(this._wrapper)
    }

    componentWillUnmount() {
      this._mounted = false
      this._observer.disconnect()
    }

    render() {
      return (
        <div ref={el => (this._wrapper = el)}>
          <WrappedComponent
            intersecting={this.state.intersecting}
            {...this.props}
          />
        </div>
      )
    }
  }

  Lazy.displayName = `Lazy(${getDisplayName(WrappedComponent)})`
  hoistNonReactStatics(Lazy, WrappedComponent)
  return Lazy
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default withIntersectionObserver
