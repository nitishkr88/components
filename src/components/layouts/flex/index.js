import styled from 'styled-components'
import PropTypes from 'prop-types'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const half = n => parseInt(n) / 2

const flexDirection = props => `
  flex-direction: ${props.flexDirection}
`

const justifyContent = props =>
  props.justifyContent
    ? `
        justify-content: ${props.justifyContent}
      `
    : null

const alignItems = props =>
  props.alignItems
    ? `
        align-items: ${props.alignItems}
      `
    : null

const flexGrow = props =>
  props.flexGrow
    ? {
        flexGrow: props.flexGrow
      }
    : null

const flexShrink = props =>
  props.flexShrink
    ? {
        flexShrink: props.flexShrink
      }
    : null

const alignSelf = props =>
  props.alignSelf
    ? {
        alignSelf: props.alignSelf
      }
    : null

const Flex = styled.div`
  display: flex;

  ${flexDirection};
  ${justifyContent};
  ${alignItems};

  > * + * {
    margin-left: ${props =>
      props.flexDirection === 'row' ? px(props.itemSpacing) : null};

    margin-right: ${props =>
      props.flexDirection === 'row-reverse' ? px(props.itemSpacing) : null};

    margin-top: ${props =>
      props.flexDirection === 'column' ? px(props.itemSpacing) : null};

    margin-bottom: ${props =>
      props.flexDirection === 'column-reverse'
        ? px(half(props.itemSpacing))
        : null};
  }

  > * {
    margin: ${props =>
      props.flexWrap === 'wrap' ? px(half(props.itemSpacing)) : null};
  }
`

Flex.Item = styled.div([], flexGrow, flexShrink, alignSelf)

Flex.propTypes = {
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap']),
  itemSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Flex.defaultProps = {
  flexDirection: 'row',
  itemSpacing: '20px'
}

export default Flex
