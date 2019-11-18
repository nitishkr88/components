import PropTypes from 'prop-types'
import styled from 'styled-components'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const width = props => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(${px(props.width)}, 1fr))`
})

const gap = props => ({
  gridGap: px(props.gap)
})

const alignContent = props =>
  props.alignContent
    ? {
        alignContent: props.alignContent
      }
    : null

const justifyContent = props =>
  props.justifyContent
    ? {
        justifyContent: props.justifyContent
      }
    : null

const alignItems = props =>
  props.alignItems
    ? {
        alignItems: props.alignItems
      }
    : null

const justifyItems = props =>
  props.justifyItems
    ? {
        justifyItems: props.justifyItems
      }
    : null

const span = props =>
  props.span
    ? {
        gridColumn: `span ${props.span}`
      }
    : null

const Grid = styled.div(
  [],
  {
    display: 'grid'
  },
  width,
  gap,
  alignContent,
  justifyContent,
  alignItems,
  justifyItems
)

Grid.Item = styled.div([], span)

Grid.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  justifyItems: PropTypes.string
}

Grid.defaultProps = {
  width: 320,
  gap: 32
}

export default Grid
