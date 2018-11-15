import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { defaultTheme } from '../parameters/colors';

const defaultValue = {
  theme: defaultTheme
}

const { Provider, Consumer } = React.createContext(defaultValue)

const withTheme = WrappedComponent => {
  class ThemedComponent extends React.Component {
    render() {
      return (
        <Consumer>
          {({ theme }) => {
            return <WrappedComponent {...this.props} theme={theme} />
          }}
        </Consumer>
      )
    }
  }
  ThemedComponent.displayName = `Themed(${getDisplayName(WrappedComponent)})`
  hoistNonReactStatics(ThemedComponent, WrappedComponent)
  return ThemedComponent
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export { Provider, Consumer, withTheme }
