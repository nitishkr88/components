import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import _isObject from 'lodash/isObject'
import _memoize from 'lodash/memoize'

import * as components from '../parameters/components'
import { defaultTheme } from '../parameters/colors'

const getTheme = propsOrTheme =>
  _isObject(propsOrTheme) ? propsOrTheme.theme : propsOrTheme

const getColors = (propsOrTheme, componentName) => {
  const theme = getTheme(propsOrTheme)

  const component = _get(components, componentName, {})

  if (_isEmpty(component)) return {}

  return _get(component, theme, component[defaultTheme])
}

// export default _memoize(getColors)
export default getColors
