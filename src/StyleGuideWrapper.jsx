import React from 'react'

import { ThemeProvider } from './hoc'
import { defaultTheme } from './parameters/colors'
import GlobalStyle from './styles'

export default props => {
  return (
    <ThemeProvider value={{ theme: defaultTheme }}>
      <>
        <GlobalStyle />
        {props.children}
      </>
    </ThemeProvider>
  )
}
