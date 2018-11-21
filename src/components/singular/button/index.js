import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getColors from '../../../_utils/colors'

const componentName = 'button'

const properties = [
  'text',
  'icon',
  'background',
  'backgroundHover',
  'backgroundFocus',
  'border',
  'borderHover',
  'borderFocus',
  'borderActive'
]

const getColorProperties = props => {
  const colors = getColors(props, componentName)[props.view]
  return properties.reduce((acc, val) => {
    acc[val] = colors[val]
    return acc
  }, {})
}
