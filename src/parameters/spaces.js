const baseValue = 4
const unit = 'px'

const makeSpace = (factor = 1) => `${factor * baseValue}${unit}`

const spaces = {
  xsmall: makeSpace(),
  small: makeSpace(2),
  medium: makeSpace(3),
  large: makeSpace(4),
  xlarge: makeSpace(5),
  xxlarge: makeSpace(6)
}

export default spaces