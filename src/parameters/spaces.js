const baseValue = 4
const unit = 'px'

const makeSpace = (factor = 1) => `${factor * baseValue}${unit}`

const spaces = {
  xxsmall: makeSpace(),
  xsmall: makeSpace(2),
  small: makeSpace(4),
  medium: makeSpace(6),
  large: makeSpace(8),
  xlarge: makeSpace(10),
  xxlarge: makeSpace(14)
}

export default spaces
