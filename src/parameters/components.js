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

const input = {
  [THEMES.light]: {
    background: colors.transparent,
    backgroundReadOnly: colors.lighterGrey,
    border: colors.ashGrey,
    borderHover: colors.lightBlue,
    borderFocus: colors.lightBlue,
    borderError: colors.red,
    icon: colors.lightBlack,
    label: colors.lighterBlack,
    labelReadOnly: colors.ashGrey,
    placeholder: colors.ashGrey,
    placeholderReadOnly: colors.ashGrey,
    text: colors.black
  },
  [THEMES.dark]: {
    background: colors.lighterBlack,
    backgroundReadOnly: colors.lighterBlack,
    border: colors.lightBlack,
    borderHover: colors.black,
    borderFocus: colors.black,
    borderError: colors.red,
    icon: colors.ashGrey,
    label: colors.white,
    labelReadOnly: colors.ashGrey,
    placeholder: colors.lighterGrey,
    placeholderReadOnly: colors.lighterGrey,
    text: colors.black
  }
}

export { avatar, icon, input }
