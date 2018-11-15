import colors, { THEMES } from './colors'

const avatar = {
  [THEMES.light]: {
    text: colors.black,
    background: colors.lightGrey,
    border: colors.transparent
  },
  [THEMES.dark]: {
    text: colors.white,
    background: colors.lighterBlack,
    border: colors.lighterBlack
  }
}

const icon = {
  [THEMES.light]: {
    color: colors.lightBlack
  },
  [THEMES.dark]: {
    color: colors.ashGrey
  }
}

const textInput = {
  [THEMES.light]: {
    background: colors.transparent,
    border: colors.ashGrey,
    borderHover: colors.lightBlue,
    borderFocus: colors.lightBlue,
    borderError: colors.red,
    icon: colors.lightBlack,
    label: colors.lighterBlack,
    placeholder: colors.ashGrey,
    text: colors.black
  },
  [THEMES.dark]: {
    background: colors.lighterBlack,
    border: colors.lightBlack,
    borderHover: colors.black,
    borderFocus: colors.black,
    borderError: colors.red,
    icon: colors.ashGrey,
    label: colors.white,
    placeholder: colors.lighterGrey,
    text: colors.black
  }
}

export { avatar, icon, textInput }
